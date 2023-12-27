import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentReducer } from './ArticleDetailsCommentsSlice';
import { articleDetailsPageRecommendationsReducer } from './ArticleDetailsPageRecommendationsSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  recommendations: articleDetailsPageRecommendationsReducer,
  comments: articleDetailsCommentReducer,
});
