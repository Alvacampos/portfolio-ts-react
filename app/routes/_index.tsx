import type { MetaFunction } from '@remix-run/node';
import { FormattedMessage } from 'react-intl';
import { getClassMaker } from '~/utils/utils';

import styles from './style.css?url';

export const links = () => [{ rel: 'stylesheet', href: styles }];

const BLOCK = 'home-route';
const getClasses = getClassMaker(BLOCK);

export const meta: MetaFunction = () => {
  return [{ title: 'My Cv' }, { name: 'description', content: 'Welcome to my Cv!' }];
};

export default function Index() {
  return (
    <div className={getClasses()}>
      <h1>
        <FormattedMessage id="WELCOME_MY_NAME_IS" />
      </h1>
      <p>
        <FormattedMessage id="I_AM_A_SOFTWARE_ENGINEER" />
      </p>
    </div>
  );
}
