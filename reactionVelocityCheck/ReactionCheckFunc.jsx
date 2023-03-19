import React, { useState, useRef } from 'react';

const ReactionCheck = () => {
  const [state, setState] = useState('waiting');
  const [message, setMessage] = useState('클릭해서 시작하세요.');
  const [result, setResult] = useState([]);
  const timeOut = useRef(null);
  const startTime = useRef();
  const endTime = useRef();

  const onClickScreen = () => {
    if (state === 'waiting') {
      setState('ready');
      setMessage('초록색이 되면 클릭하세요.');

      timeOut.current = setTimeout(() => {
        setState('now');
        setMessage('지금 클릭!');

        startTime.current = new Date();
      }, Math.floor(Math.random() * 1000) + 2000); // 2초에서 3초 사이 랜덤 변경
    } else if (state === 'ready') {
      // 성급한 클릭
      clearTimeout(timeOut.current);
      setState('waiting');
      setMessage('너무 성급하시군요! 초록색이 된 후에 클릭하세요.');
    } else if (state === 'now') {
      // 반응 속도 체크
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요');
      setResult((prevResult) => {
        return [...prevResult, endTime.current.getTime() - startTime.current.getTime()];
      });
    }
  };

  const onReset = () => {
    setResult([]);
  };

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {result.length === 0 ? null : <div>평균 시간: {result.reduce((a, b) => a + b) / result.length}ms</div>}
      <button onClick={onReset}>reset</button>
    </>
  );
};

export default ReactionCheck;
