import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Page } from 'widgets/Page/Page';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = (props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const isEdit = Boolean(id);

  return (
    <Page className={classNames('', {}, [className])}>
      {isEdit
        ? t('Редактирование статьи с ID =') + id
        : t('Создание новой статьи')}
    </Page>
  );
};

export default ArticleEditPage;
