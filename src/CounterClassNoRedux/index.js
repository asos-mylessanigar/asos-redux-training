import React from 'react';

class CounterClassNoRedux extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.handleIncrememnt = this.handleIncrememnt.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  componentDidMount() {
    this.handleIncrememnt();
  }

  handleIncrememnt() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  handleDecrement() {
    this.state.count > 0 &&
      this.setState({
        count: this.state.count - 1,
      });
  }

  render() {
    return (
      <section className="section">
        <h2 className="subtitle">
          Class Component.
          <br />
          <strong>No Redux</strong>.
        </h2>
        <p className="mb-2"> Count: {this.state.count}</p>
        <button
          className="button is-primary mr-2"
          type="button"
          onClick={this.handleIncrememnt}
        >
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>
        <button
          className="button is-primary"
          type="button"
          onClick={this.handleDecrement}
        >
          <i className="fa fa-minus" aria-hidden="true"></i>
        </button>
      </section>
    );
  }
}

export default CounterClassNoRedux;
