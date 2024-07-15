import type { MetaFunction } from '@remix-run/node';
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { IntlProvider } from 'react-intl';
import messages from '~/intl/en-US.json';
import { getClassMaker } from '~/utils/utils';
import NavBar, { links as NavBarLinks } from '~/components/NavBar';

import styles from '~/styles/style.css?url';
import tailwind from '~/styles/tailwind.css?url';

export function links() {
  return [
    ...NavBarLinks(),
    { rel: 'icon', href: '../public/favicon.ico', type: 'image/x-icon' },
    { rel: 'stylesheet', href: tailwind },
    { rel: 'stylesheet', href: styles },
  ];
}

const BLOCK = 'root';
const getClasses = getClassMaker(BLOCK);

export const meta: MetaFunction = () => {
  return [
    { title: 'Gonzalo Alvarez Campos Cv' },
    {
      property: 'og:title',
      content: 'Gonzalo Ramiro Alvarez Campos',
    },
    { name: 'description', content: 'Welcome to my Cv!' },
  ];
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1" />
          <Meta />
          <Links />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          />
        </head>
        <body className={getClasses()}>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
  );
}

export default function App() {
  return (
    <>
      <IntlProvider messages={messages} locale="en" defaultLocale="en">
        <NavBar />
        <main>
          <Outlet />
        </main>
      </IntlProvider>
    </>
  );
}
