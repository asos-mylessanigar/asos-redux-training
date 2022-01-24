import React from 'react';
import CounterClassNoRedux from './CounterClassNoRedux';
import CounterClassRedux from './CounterClassRedux';
import CounterClassReduxConnect from './CounterClassReduxConnect';
import { Provider } from 'react-redux';
import store from './CounterClassRedux/store';
import connectedStore from './CounterClassReduxConnect/store';
import './App.scss';
import CounterFCHooksNoRedux from './CounterFCHooksNoRedux';
import CounterFCContext from './CounterFCContext/CounterFCContext';
import { CountProvider } from './CounterFCContext/count-context';
import CounterFCHooksReduxToolkit from './CounterFCHooksReduxToolkit';
import tkstore from './CounterFCHooksReduxToolkit/store';

const App = () => {
  return (
    <div className="container">
      <h1 className="title p-2 has-background-dark has-text-light">
        Redux demo
      </h1>
      <div className="columns">
        <div className="column">
          <CounterClassNoRedux />
        </div>

        <div className="column">
          <Provider store={store}>
            <CounterClassRedux />
          </Provider>
        </div>

        <div className="column">
          <Provider store={connectedStore}>
            <CounterClassReduxConnect />
          </Provider>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <CounterFCHooksNoRedux />
        </div>
        <div className="column">
          <CountProvider>
            <CounterFCContext />
          </CountProvider>
        </div>
        <div className="column">
          <Provider store={tkstore}>
            <CounterFCHooksReduxToolkit />
          </Provider>
        </div>
      </div>
    </div>
  );
};

export default App;
