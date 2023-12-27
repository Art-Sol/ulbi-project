import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import {
  ArticleListItemSkeleton,
} from 'entitie/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { Article, ArticleView } from '../../model/types/article';

import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.TILE ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton key={index} view={view} className={cls.card} />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.TILE,
    isLoading,
    target,
  } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      className={cls.card}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
        <Text title={t('Статьи не найдены', { ns: 'article' })} size={TextSize.L} />
      </div>
    );
  }

  return (
    <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view) }
    </div>
  );
});
