const React = require('react');
const { PureComponent } = require('react');

class Try extends PureComponent {
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
