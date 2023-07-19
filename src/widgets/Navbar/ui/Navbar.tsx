import React, { type FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={classNames(cls.navbar, {}, [className])}>

    <div className={cls.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
        О сайте
      </AppLink>
    </div>
  </div>
);
