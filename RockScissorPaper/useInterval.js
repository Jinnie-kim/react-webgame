import { useRef, useEffect } from 'react';

// const [isRunning, setIsRunning] = useState(true);
// useInterval(
//   () => {
//     console.log('hello');
//   },
//   isRunning ? 1000 : null
// );

function useInterval(callback, delay) {
  const savedCallback = useRef(); // 항상 최신 객체를 참조한다.

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterval;
