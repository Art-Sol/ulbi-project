import { type FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const Portal: FC<PortalProps> = (props) => {
  const { children, element = document.body } = props;
  return createPortal(children, element);
};
