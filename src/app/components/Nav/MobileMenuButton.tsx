import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
    onClick: any // eslint-disable-line @typescript-eslint/no-explicit-any
}

export default function MobileMenuButton({ onClick }: Props) {
  return (
    <button className="absolute right-2 top-2 mr-2 sm:mr-0" onClick={onClick}>
      <FontAwesomeIcon className="text-4xl" icon={faBars} />
    </button>
  );
}