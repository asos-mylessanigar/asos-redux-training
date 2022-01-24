import React, { useEffect } from 'react';
import { useCount } from './count-context';

const CounterFCContext = () => {
  const {
    state: { count },
  } = useCount();
  const { dispatch } = useCount();

  useEffect(() => {
    handleIncrememnt();
  }, []);

  const handleIncrememnt = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    count > 0 && dispatch({ type: 'decrement' });
  };

  return (
    <section className="section">
      <h2 className="subtitle">
        FC w/Context.
        <br />
        <strong>No Redux</strong>.
      </h2>
      <p className="mb-2"> Count: {count}</p>
      <button
        className="button is-dark mr-2"
        type="button"
        onClick={handleIncrememnt}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      <button
        className="button is-dark"
        type="button"
        onClick={handleDecrement}
      >
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
    </section>
  );
};

export default CounterFCContext;
