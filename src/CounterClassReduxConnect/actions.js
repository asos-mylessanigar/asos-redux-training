export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const incrementDispatcher = () => {
  return {
    type: INCREMENT,
    data: '123',
  };
};

export const decrementDispatcher = () => {
  return (dispatch) => {
    dispatch({ type: TOGGLE_LOADING });
    setTimeout(() => {
      dispatch({
        type: DECREMENT,
      });
      dispatch({ type: TOGGLE_LOADING });
    }, 2500);
  };
};

export const loadingDispatcher = () => {
  return { type: TOGGLE_LOADING };
};
