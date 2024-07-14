import { Links, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import NavBar, { links as NavBarLinks } from '~/components/NavBar';

import '~/style.css';
import './tailwind.css';

export function links() {
  return [...NavBarLinks(), { rel: 'icon', href: '/assets/img/favicon.svg', type: 'image/svg' }];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />
      </head>
      <body>
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
      <NavBar />
      <Outlet />
    </>
  );
}
