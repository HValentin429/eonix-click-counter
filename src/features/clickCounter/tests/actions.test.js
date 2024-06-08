import { INCREMENT, DECREMENT } from '../constant';
import { incrementAction, decrementAction } from '../action';

describe('clickCounter test actions', () => {
  it('test create increment action', () => {
    const expectedAction = {
      type: INCREMENT,
    };
    expect(incrementAction()).toEqual(expectedAction);
  });

  it('test create decrement action', () => {
    const expectedAction = {
      type: DECREMENT,
    };
    expect(decrementAction()).toEqual(expectedAction);
  });
});
