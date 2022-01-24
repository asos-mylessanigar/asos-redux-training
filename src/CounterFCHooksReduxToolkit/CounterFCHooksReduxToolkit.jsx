import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';

const CounterFCHooksReduxToolkit = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    handleIncrememnt();
  }, []);

  const handleIncrememnt = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    count > 0 && dispatch(decrement());
  };

  return (
    <section className="section">
      <h2 className="subtitle">
        FC w/Hooks.
        <br />
        <strong>Redux Toolkit</strong>.
      </h2>
      <p className="mb-2"> Count: {count}</p>
      <button
        className="button is-link mr-2"
        type="button"
        onClick={handleIncrememnt}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      <button
        className="button is-link"
        type="button"
        onClick={handleDecrement}
      >
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
    </section>
  );
};

export default CounterFCHooksReduxToolkit;
