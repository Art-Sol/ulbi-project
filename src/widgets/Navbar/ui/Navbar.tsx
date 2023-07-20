import React, { type FC } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation(['main', 'about']);
  return (

    <div className={classNames(cls.navbar, {}, [className])}>

      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.mainLink}>
          {t('Главная', { ns: 'main' })}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
          {t('О сайте', { ns: 'about' })}
        </AppLink>
      </div>
    </div>
  );
};
