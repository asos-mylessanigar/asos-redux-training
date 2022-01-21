import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { INCREMENT, DECREMENT, TOGGLE_LOADING } from './actions';
import thunk from 'redux-thunk';

const initialState = {
  count: 0,
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case TOGGLE_LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
  }

  return state;
};

const connectedStore = createStore(
  reducer,
  compose(composeWithDevTools(applyMiddleware(thunk)))
);

export default connectedStore;
