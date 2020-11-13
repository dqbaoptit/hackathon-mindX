import { combineReducers } from 'redux';
import { INCREMENT, DEINCREMENT } from './constants';

// COMBINED REDUCERS
const initialCounter = {
  value: 0,
};

function counter(state = initialCounter, action) {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: (state.value += 1) };
    case DEINCREMENT:
      return { ...state, value: (state.value -= 1) };
    default:
      return { ...state };
  }
}

const reducers = { counter };

export default combineReducers(reducers);
