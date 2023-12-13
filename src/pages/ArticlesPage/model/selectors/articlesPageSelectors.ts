import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entitie/Article';

// eslint-disable-next-line max-len
export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
// eslint-disable-next-line max-len
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.TILE;
