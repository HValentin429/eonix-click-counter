import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectclickContainerCounter } from './selector';
import { decrementAction, incrementAction } from './action';
import './clickCounter.module.css';

function ClickCounter({
  onIncrement,
  onDecrement,
  counter,
}) {
  return (
    <div>
      <p> Vous avez cliqué {counter} fois </p>
      <div>
        <button className='button' onClick={onIncrement}>
          +
        </button>
        <button className='button' onClick={onDecrement}>
          -
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  counter: makeSelectclickContainerCounter(),
});

const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(incrementAction()),
  onDecrement: () => dispatch(decrementAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClickCounter);
