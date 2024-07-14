import Button, { links as ButtonLinks } from '~/components/Button';
import { ConditionalLink } from '~/components/ConditionalWrapper';
import { getClassMaker } from '~/utils/utils';
import { Home, Paper, Education, GithubIcon, LinkedinIcon } from '~/components/icons';
import LinkedInQR from '~/assets/img/linkedin_dark.png';

import styles from './style.css?url';

export const links = () => [...ButtonLinks(), { rel: 'stylesheet', href: styles }];

const BLOCK = 'navbar-component';
const getClasses = getClassMaker(BLOCK);

const GIT_LINK_ICON = {
  url: 'https://github.com/Alvacampos',
  leftIcon: GithubIcon,
  className: 'special-anchor',
  // alt: 'Home Logo',
  // title: 'Home',
  // tabIndex: '-1',
  // location: 'Home',
};

const MAIN_NAV = [
  {
    url: './',
    label: 'Home',
    leftIcon: Home,
    // alt: 'Home Logo',
    // title: 'Home',
    // tabIndex: '-1',
    // location: 'Home',
  },
  {
    url: './skills',
    label: 'CV',
    leftIcon: Paper,
    // alt: 'CV Logo',
    // title: 'CV',
    // tabIndex: '-1',
    // location: 'CV',
  },
  {
    url: './education',
    label: 'Education',
    leftIcon: Education,
    // alt: 'Education Logo',
    // title: 'Education',
    // tabIndex: '-1',
    // location: 'Education',
  },
];

export default function NavBar() {
  return (
    <nav className={getClasses()}>
      <div className={getClasses('special-anchor-container')}>
        <ConditionalLink to={GIT_LINK_ICON.url} condition={!!GIT_LINK_ICON.url}>
          <div className={getClasses('special-anchor-wrapper')}>
            <GithubIcon className={getClasses('special-anchor')} />
          </div>
        </ConditionalLink>
        <ConditionalLink
          to={GIT_LINK_ICON.url}
          condition={!!GIT_LINK_ICON.url}
          className={getClasses('linkedin-anchor')}
        >
          <LinkedinIcon className={getClasses('special-anchor')} />
        </ConditionalLink>
      </div>
      <div className={getClasses('main-section')}>
        <div className={getClasses('main-buttons')}>
          <ul>
            {MAIN_NAV.map((btn) => (
              <li key={btn.label}>
                <Button {...btn} />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <img src={LinkedInQR} alt="LinkedIn" className={getClasses('qr')} />
        </div>
      </div>
    </nav>
  );
}
