import { lazy } from 'react';

export const AboutPageAsync = lazy(async () => await new Promise(resolve => {
  // Promise + SetTimeout для примера задержки
  // @ts-expect-error
  setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
