import { INCREMENT, DECREMENT } from '../actions';

const intialState = {
  count: 0
};

export default (state = intialState, action) => {
  switch(action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1};
    case DECREMENT:
      return { ...state, count: state.count - 1};
    default:
      return state;
  }
};