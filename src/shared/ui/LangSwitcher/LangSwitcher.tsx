import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <div>
      <Button
        theme={ButtonTheme.CLEAR}
        onClick={onToggle}
        className={classNames('', {}, [className])}
      >
        {short ? t('Короткий язык') : t('Язык')}
      </Button>
    </div>
  );
};
