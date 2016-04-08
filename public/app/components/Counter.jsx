var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return { value: 2 };
  },

  handleClick: function(value, event) {
    this.setState({ value: this.state.value + value });
  },
  render: function() {
    return (
      <div>
        <div>{this.state.value}</div>
        <div>
          <button onClick={this.handleClick.bind(this, -1) }>-</button>
          <button onClick={this.handleClick.bind(this, 1) }>+</button>
        </div>
      </div>
    )
  }
});
