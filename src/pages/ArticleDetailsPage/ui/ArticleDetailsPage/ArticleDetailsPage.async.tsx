import { lazy } from 'react';

export const ArticleDetailsPageAsync = lazy(async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
  // @ts-expect-error
  setTimeout(() => { resolve(import('./ArticleDetailsPage')); }, 1500);
}));
