import type { ComponentType } from 'react';
import { ConditionalLink } from '~/components/ConditionalWrapper';
import { getClassMaker } from '~/utils/utils';

import styles from './style.css?url';

export const links = () => [{ rel: 'stylesheet', href: styles }];

const BLOCK = 'button-component';
const getClasses = getClassMaker(BLOCK);

type ButtonProps = {
  url?: string;
  className?: string;
  label?: string;
  rightIcon?: ComponentType<{ className: string }>;
  leftIcon?: ComponentType<{ className: string }>;
  btnType?: 'button' | 'submit';
};

export default function Button({
  url = undefined,
  className = '',
  label = '',
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  btnType = 'button',
}: ButtonProps) {
  return (
    <ConditionalLink to={url} condition={!!url} className={getClasses('link-wrapper')}>
      <button className={getClasses(className)} onClick={() => console.log('asd')} type={btnType}>
        {LeftIcon && <LeftIcon className={getClasses('icon', 'left')} />}
        {label && label}
        {RightIcon && <RightIcon className={getClasses('icon', 'right')} />}
      </button>
    </ConditionalLink>
  );
}
