import React from 'react';
import * as actions from './actions';
import store from './store';

class CounterClassRedux extends React.Component {
  constructor(props) {
    super(props);

    let storeState = store.getState();
    let count = storeState.count;
    this.state = {
      count: count,
      unsubscribe: store.subscribe(this.onStoreUpdated.bind(this)),
    };

    this.handleIncrememnt = this.handleIncrememnt.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    this.handleIncrememnt();
  }

  componentWillUnmount() {
    this.state.unsubscribe();
  }

  onStoreUpdated() {
    let storeState = store.getState();
    this.setState({
      count: storeState.count,
    });
  }

  handleIncrememnt() {
    store.dispatch(actions.incrementDispatcher());
  }

  handleDecrement() {
    this.state.count > 0 && store.dispatch(actions.decrementDispatcher());
  }

  render() {
    return (
      <section className="section">
        <h2 className="subtitle">
          Class Component.
          <br />
          <strong>Redux</strong>.
        </h2>
        <p className="mb-2"> Count: {this.state.count}</p>
        <button
          className="button is-info mr-2"
          type="button"
          onClick={this.handleIncrememnt}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <button
          className="button is-info"
          type="button"
          onClick={this.handleDecrement}
        >
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
      </section>
    );
  }
}

export default CounterClassRedux;
