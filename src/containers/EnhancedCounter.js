import { connect } from 'react-redux';
import { Counter } from '../components/Counter';
import { INCREMENT, DECREMENT } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return ({
    increment() {
      dispatch({type: INCREMENT});
    },
    decrement() {
      dispatch({type: DECREMENT});
    }
  })
};

const mapStateToProps = (state) => {
  return {
    Counter: state.Counter
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);