import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';
// import { Counter } from 'entitie/Counter';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return (
    <Page>
      {t('О сайте')}
      {/* <Counter /> */}
    </Page>
  );
};

export default AboutPage;
