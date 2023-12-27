import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { StateSchema } from 'app/providers/StoreProvider';
import { Comment } from 'entitie/Comment';
import { Article } from 'entitie/Article';

import {
  fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsRecommendationsSchema } from '../types/ArticleDetailsRecommendationsSchema';

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

const ArticleDetailsPageRecommendationsSlice = createSlice({
  name: 'ArticleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {
  reducer: articleDetailsPageRecommendationsReducer,
} = ArticleDetailsPageRecommendationsSlice;
