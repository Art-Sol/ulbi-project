import { getQueryParams } from './addQueryParams';

describe('shared/url/addQueryParams', () => {
  test('test with one param', () => {
    const param = getQueryParams({
      test: 'value',
    });
    expect(param).toBe('?test=value');
  });

  test('test with multi param', () => {
    const param = getQueryParams({
      test: 'value',
      second: '2',
    });
    expect(param).toBe('?test=value&second=2');
  });

  test('test with undefined', () => {
    const param = getQueryParams({
      test: 'value',
      second: undefined,
    });
    expect(param).toBe('?test=value');
  });
});
