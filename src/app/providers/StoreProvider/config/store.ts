import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';

import { counterReducer } from 'entitie/Counter';
import { userReducer } from 'entitie/User';

import { loginReducer } from 'features/AuthByUserName';

import { StateSchema } from '../config/StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });
}
