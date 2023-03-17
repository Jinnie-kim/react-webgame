const React = require('react');
const { useState, useRef } = React;

const WordRelay = () => {
  const [word, setWord] = useState('유르');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('정답입니다.');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('틀렸습니다.');
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeValue = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <>
      <h1>함수 컴포넌트 끝말잇기</h1>
      <h2>{word}</h2>
      <form onSubmit={onSubmitForm}>
        <input type="text" value={value} ref={inputRef} onChange={onChangeValue} />
        <button type="submit">입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
