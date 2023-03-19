const React = require('react');
const { memo, useState } = React;

const Try = memo(({ tries }) => {
  const [result, setResult] = useState(tries.result);

  const onClick = () => {
    setResult('1');
  };

  return (
    <li>
      <div>{tries.try}</div>
      <div onClick={onClick}>{tries.result}</div>
    </li>
  );
});

Try.displayName = 'Try';

module.exports = Try;
