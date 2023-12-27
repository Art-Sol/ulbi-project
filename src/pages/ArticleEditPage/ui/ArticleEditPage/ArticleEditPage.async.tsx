import { lazy } from 'react';

export const ArticleEditPageAsync = lazy(async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
  // @ts-expect-error
  setTimeout(() => { resolve(import('./ArticleEditPage')); }, 1500);
}));
