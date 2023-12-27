import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entitie/Profile';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { articleDetailsReducer } from 'entitie/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import {
  articleDetailsCommentReducer,
} from 'pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice';

import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { ReducersList } from '../../../lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
