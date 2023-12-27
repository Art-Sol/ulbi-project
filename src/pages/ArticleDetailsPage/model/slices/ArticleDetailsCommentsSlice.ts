import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';

import { Comment } from 'entitie/Comment';
import { StateSchema } from 'app/providers/StoreProvider';
import {
  fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';

const commentsAdapater = createEntityAdapter<Comment>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapater.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.comments || commentsAdapater.getInitialState(),
);

const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapater.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
        state.isLoading = false;
        commentsAdapater.setAll(state, action.payload);
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentsSlice;
