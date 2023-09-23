import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
  setTimeout(() => { resolve(import('./LoginForm')); }, 1500);
}));
