import { CounterSchema } from '../types/counterSchema';
import { counterActions, counterReducer } from './counterSlice';

describe('counterSlice', () => {
  test('decrement action', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.decrement),
    ).toEqual({ value: 9 });
  });

  test('increment action', () => {
    const state: CounterSchema = { value: 10 };
    expect(
      counterReducer(state, counterActions.increment),
    ).toEqual({ value: 11 });
  });

  test('should work with empty state', () => {
    expect(
      counterReducer(undefined, counterActions.increment),
    ).toEqual({ value: 1 });
  });
});
