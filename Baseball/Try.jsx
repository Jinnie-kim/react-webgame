const React = require('react');
const { Component } = require('react');

class Try extends Component {
  render() {
    return (
      <li key={this.props.index}>
        <b>{this.props.value.fruit}</b> - {this.props.index}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </li>
    );
  }
}

module.exports = Try;
