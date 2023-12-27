import {
  AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import {
  ArticleDetailsCommentsSchema, ArticleDetailsPageSchema, ArticleDetailsRecommendationsSchema,
} from 'pages/ArticleDetailsPage';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { CounterSchema } from 'entitie/Counter';
import { UserSchema } from 'entitie/User';
import { ProfileSchema } from 'entitie/Profile';
import { ArticleDetailsSchema } from 'entitie/Article';
import { LoginSchema } from 'features/AuthByUserName';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { UISchema } from 'features/UI';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  ui: UISchema;

  // Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  // true - вмонтирован, false - демонтирован
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManger extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
