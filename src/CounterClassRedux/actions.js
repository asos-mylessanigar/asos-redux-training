export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const incrementDispatcher = () => {
  return {
    type: INCREMENT,
    data: '123',
  };
};

export const decrementDispatcher = () => {
  return {
    type: DECREMENT,
  };
};
