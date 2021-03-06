import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { INCREMENT, DECREMENT } from './actions';
import thunk from 'redux-thunk';

const initialState = {
  count: 0,
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
  }

  return state;
};

const customMiddleWare = (store) => (next) => (action) => {
  console.log('Middleware triggered:', action);
  next(action);
};

const store = createStore(
  reducer,
  compose(composeWithDevTools(applyMiddleware(thunk, customMiddleWare)))
);

export default store;
