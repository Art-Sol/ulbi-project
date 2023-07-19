import { lazy } from 'react';

export const MainPageAsync = lazy(async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
  // @ts-expect-error
  setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));
