const React = require('react');

const Try = ({ tries }) => {
  return (
    <li>
      <div>{tries.try}</div>
      <div>{tries.result}</div>
    </li>
  );
};

module.exports = Try;
