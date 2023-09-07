import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from 'entitie/Counter';
import { StateSchema } from '../config/StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  return configureStore<StateSchema>({
    reducer: {
      counter: counterReducer,
    },
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}