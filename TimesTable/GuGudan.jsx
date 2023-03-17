// import { useRef, useState } from 'react';
const React = require('react');
const { useRef, useState } = React;

const GuGudan = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const calculate = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(`${value} 정답 ~ ✨`);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    } else {
      setResult(`${value} 땡 ! 👻`);
      setValue('');
      inputRef.current.focus();
    }
  };

  const typeValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={calculate}>
        <input type="number" value={value} ref={inputRef} onChange={typeValue} />
        <button type="submit">입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = GuGudan;
