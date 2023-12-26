import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { addQueryParams, getQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { initArticlesPage } from './initArticlesPage';

const params = new URLSearchParams();
params.set('search', 'test');

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage', () => {
  test('success init', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
        _inited: false,
      },
    });

    await thunk.callThunk(params);

    expect(thunk.dispatch).toBeCalledTimes(5);
    expect(fetchArticlesList).toBeCalledWith({});
  });

  test('fetch no called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
        _inited: true,
      },
    });

    await thunk.callThunk(params);

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
