export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementDispatcher = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementDispatcher = () => {
  return {
    type: DECREMENT,
  };
};
