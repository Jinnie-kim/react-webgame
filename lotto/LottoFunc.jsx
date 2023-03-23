import React, { useState, useRef, useEffect } from 'react';
import Ball from './Ball';

function getWinNumbers() {
  // 나름 계산량이 많은 함수이기 때문에 반복실행되면 안된다.
  console.log('getWinNumbers');
  const candidate = Array(45)
    .fill()
    .map((_, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((a, b) => a - b);
  return [...winNumbers, bonusNumber];
}

const Lotto = () => {
  const [winNumbers, setWinNumbers] = useState(getWinNumbers); // 당첨 숫자들
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null); // 보너스 숫자
  const [redo, setRedo] = useState(false);
  const timeouts = useRef([]);

  useEffect(() => {
    console.log('useEffect');
    for (let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]]);
      }, (i + 1) * 1000);
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000);
    return () => {
      // componentWillUnmount의 역할
      timeouts.current.forEach((t) => {
        clearTimeout(t);
      });
    };
  }, [timeouts.current]);

  const onClickRedo = () => {
    console.log('onclickRedo');
    setWinNumbers(getWinNumbers);
    setWinBalls([]);
    setBonus(null);
    setRedo(false);

    timeouts.current = [];
  };

  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">
        {winBalls.map((v) => (
          <Ball key={v} number={v} />
        ))}
      </div>
      <div>보너스!</div>
      {bonus && <Ball number={bonus} />}
      {redo && <button onClick={onClickRedo}>한 번 더!</button>}
    </>
  );
};

export default Lotto;
