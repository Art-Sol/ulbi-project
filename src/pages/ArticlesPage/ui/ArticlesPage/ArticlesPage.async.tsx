import { lazy } from 'react';

export const ArticlesPageAsync = lazy(async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
  // @ts-expect-error
  setTimeout(() => { resolve(import('./ArticlesPage')); }, 400);
}));
