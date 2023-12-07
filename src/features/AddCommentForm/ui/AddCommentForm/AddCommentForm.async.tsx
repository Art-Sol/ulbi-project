import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
  async () => new Promise((resolve) => {
  // Promise + SetTimeout для примера задержки
    setTimeout(() => { resolve(import('./AddCommentForm')); }, 1500);
  }),
);
