import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

const getPath = (state: StateSchema, path: string) => path;
export const getUIScroll = (state: StateSchema) => state.ui.scroll;
export const getUIScrollByPath = createSelector(
  getUIScroll,
  getPath,
  (scroll, path) => scroll[path] || 0,
);
