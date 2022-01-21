import React from 'react';
import CounterClassNoRedux from './CounterClassNoRedux';
import CounterClassRedux from './CounterClassRedux';
import CounterClassReduxConnect from './CounterClassReduxConnect';
import { Provider } from 'react-redux';
import store from './CounterClassRedux/store';
import connectedStore from './CounterClassReduxConnect/store';
import './App.scss';

const App = () => {
  return (
    <div className="container">
      <h1 className="title p-2 has-background-warning">Redux demo</h1>
      <CounterClassNoRedux />
      <Provider store={store}>
        <CounterClassRedux />
      </Provider>
      <Provider store={connectedStore}>
        <CounterClassReduxConnect />
      </Provider>
    </div>
  );
};

export default App;
