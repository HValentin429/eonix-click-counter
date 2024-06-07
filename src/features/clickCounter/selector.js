import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectclickContainerDomain = state => state.clickContainer || initialState;
const makeSelectclickContainerCounter = () => createSelector(selectclickContainerDomain, substate => substate.counter);

export {
  makeSelectclickContainerCounter,
};
