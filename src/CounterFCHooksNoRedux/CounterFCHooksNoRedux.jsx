import React, { useState, useEffect } from 'react';

const CounterFCHooksNoRedux = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    handleIncrememnt();
  }, []);

  const handleIncrememnt = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 && setCount(count - 1);
  };

  return (
    <section className="section">
      <h2 className="subtitle">
        FC Hooks Component.
        <br />
        <strong>No Redux</strong>.
      </h2>
      <p className="mb-2"> Count: {count}</p>
      <button
        className="button is-danger mr-2"
        type="button"
        onClick={handleIncrememnt}
      >
        <i className="fa fa-plus" aria-hidden="true"></i>
      </button>
      <button
        className="button is-danger"
        type="button"
        onClick={handleDecrement}
      >
        <i className="fa fa-minus" aria-hidden="true"></i>
      </button>
    </section>
  );
};

export default CounterFCHooksNoRedux;
