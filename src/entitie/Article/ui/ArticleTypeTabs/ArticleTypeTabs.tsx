import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { ArticleType } from 'entitie/Article';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs, TabsItem } from 'shared/ui/Tabs/Tabs';

interface ArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = (props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation();

  const typeTabs = useMemo<TabsItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('Все статьи'),
    },
    {
      value: ArticleType.IT,
      content: t('Айти'),
    },
    {
      value: ArticleType.SCIENCE,
      content: t('Наука'),
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('Экономика'),
    },
  ], [t]);

  const handleTabClick = useCallback((tab: TabsItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
    <Tabs
      value={value}
      tabs={typeTabs}
      onTabClick={handleTabClick}
      className={classNames('', {}, [className])}
    />
  );
};
