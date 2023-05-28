import React, { type FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './ThemeSwitcher.module.scss';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
    </Button>
  );
};
