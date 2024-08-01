import React, { useEffect, useRef, useState } from "react";

const Stopwatch: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // updates time every 10 ms
      }, 10);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  const startHandler = () => {
    setIsRunning(true);
  };
  const stopHandler = () => {
    setIsRunning(false);
  };
  const resetHandler = () => {
    setIsRunning(false);
    setTime(0);
  };
  const formatTime = (time: number) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="flex justify-center mt-5 font-bold text-3xl">
      <div className="text-center">
        <div className="text-2xl mb-4 text-yellow-400 font-mono">
          {formatTime(time)}
        </div>
        <div className="flex justify-center space-x-2 mb-2">
          {!isRunning && (
            <button
              onClick={startHandler}
              className="text-base px-4 py-2 mx-2 rounded hover:bg-green-700 text-white"
            >
              Start
            </button>
          )}
          {isRunning && (
            <button
              onClick={stopHandler}
              className="text-base px-4 py-2 mx-2 rounded hover:bg-yellow-500 text-white"
            >
              Stop
            </button>
          )}
          <button
            onClick={resetHandler}
            className="text-base px-4 py-2 mx-2 rounded hover:bg-red-700  text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
