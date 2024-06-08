import clickCounterReducer from '../reducer';
import { INCREMENT, DECREMENT } from '../constant';

describe('clickCounter reducer tests', () => {
  const initialState = {
    counter: 0,
  };

  it('Initialise', () => {
    expect(clickCounterReducer(undefined, {})).toEqual(initialState);
  });

  it('increments by 1', () => {
    const action = { type: INCREMENT };
    const expectedState = { counter: initialState.counter + 1 };
    expect(clickCounterReducer(initialState, action)).toEqual(expectedState);
  });

  it('decrements by 1', () => {
    const initialStateDecrement = {
        counter: 1,
      };
    const action = { type: DECREMENT };
    const expectedState = { counter: initialStateDecrement.counter - 1 };
    expect(clickCounterReducer(initialStateDecrement, action)).toEqual(expectedState);
  });

  it('ensures the counter never goes below 0', () => {
    const action = { type: DECREMENT };
    const expectedState = { counter: initialState.counter };
    expect(clickCounterReducer(initialState, action)).toEqual(expectedState);
  });
});
