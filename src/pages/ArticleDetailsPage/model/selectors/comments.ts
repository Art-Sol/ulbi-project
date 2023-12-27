import { StateSchema } from 'app/providers/StoreProvider';

// eslint-disable-next-line max-len
export const getArticleCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.isLoading || false;
};
// eslint-disable-next-line max-len
export const getArticleCommentsError = (state: StateSchema) => {
  return state.articleDetailsPage?.comments?.error || undefined;
};
