const React = require('react');
const { Component } = require('react');

class Try extends Component {
  render() {
    return (
      <li>
        <div>{this.props.tries.try}</div>
        <div>{this.props.tries.result}</div>
      </li>
    );
  }
}

module.exports = Try;
