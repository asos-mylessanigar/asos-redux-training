import React from 'react';
import CounterClassNoRedux from './CounterClassNoRedux';
import CounterClassRedux from './CounterClassRedux';
import { Provider } from 'react-redux';
import store from './CounterClassRedux/store';
import './App.scss';

const App = () => {
  return (
    <div className="container">
      <h1 className="title p-2 has-background-warning">Redux demo</h1>
      <CounterClassNoRedux />
      <Provider store={store}>
        <CounterClassRedux />
      </Provider>
    </div>
  );
};

export default App;
