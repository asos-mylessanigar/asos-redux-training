import React from 'react';
import CounterClassNoRedux from './CounterClassNoRedux';
import CounterClassRedux from './CounterClassRedux';
import CounterClassReduxConnect from './CounterClassReduxConnect';
import { Provider } from 'react-redux';
import store from './CounterClassRedux/store';
import connectedStore from './CounterClassReduxConnect/store';
import './App.scss';
import CounterFCHooksNoRedux from './CounterFCHooksNoRedux';

const App = () => {
  return (
    <div className="container">
      <h1 className="title p-2 has-background-dark has-text-light">
        Redux demo
      </h1>
      <div class="columns">
        <div class="column">
          <CounterClassNoRedux />
        </div>

        <div class="column">
          <Provider store={store}>
            <CounterClassRedux />
          </Provider>
        </div>

        <div class="column">
          <Provider store={connectedStore}>
            <CounterClassReduxConnect />
          </Provider>
        </div>
      </div>
      <div className="columns">
        <div class="column">
          <CounterFCHooksNoRedux />
        </div>
      </div>
    </div>
  );
};

export default App;
