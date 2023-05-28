import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className }) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button
        theme={ThemeButton.CLEAR}
        onClick={onToggle}
        className={classNames(cls.langSwitcher, {}, [className])}
      >
        {t('Язык')}
      </Button>
    </div>
  );
};
