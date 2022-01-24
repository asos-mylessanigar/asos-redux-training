import React from 'react';
import { connect } from 'react-redux';
import { incrementDispatcher, decrementDispatcher } from './actions';

class CounterClassReduxConnect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      testState: 'Connected Redux',
    };

    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    this.props.incrementDispatcher();
  }

  handleDecrement() {
    this.props.count > 0 && this.props.decrementDispatcher();
  }

  render() {
    if (!this.props.loading) {
      return (
        <section className="section">
          <h2 className="subtitle">
            Class Component.
            <br />
            <strong>{this.state.testState}</strong>.
          </h2>
          <p className="mb-2"> Count: {this.props.count}</p>
          <button
            className="button is-warning mr-2"
            type="button"
            onClick={() => this.props.incrementDispatcher()}
          >
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
          <button
            className="button is-warning"
            type="button"
            onClick={() => this.handleDecrement()}
          >
            <i className="fa fa-minus" aria-hidden="true"></i>
          </button>
        </section>
      );
    } else {
      return (
        <>
          <p>LOADING... this is thunk in action!</p>
        </>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementDispatcher: () => dispatch(incrementDispatcher()),
    decrementDispatcher: () => dispatch(decrementDispatcher()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterClassReduxConnect);
