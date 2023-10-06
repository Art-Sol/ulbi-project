import { lazy } from 'react';

export const ProfilePageAsync = lazy(async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
  // @ts-expect-error
  setTimeout(() => { resolve(import('./ProfilePage')); }, 1500);
}));
