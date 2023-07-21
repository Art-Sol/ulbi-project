import { classNames } from './classNames';

describe('classNames', () => {
  test('only first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('first param + additional class', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2']))
      .toBe(expected);
  });

  test('first param + mods + additional class', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('first param + falsy mod + additional class', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: false },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });

  test('first param + undefined mod + additional class', () => {
    const expected = 'someClass class1 class2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['class1', 'class2'],
    ))
      .toBe(expected);
  });
});
