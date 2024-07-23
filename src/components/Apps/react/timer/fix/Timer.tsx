import React, { useState, useEffect } from "react";

interface TimerProps {
  initialTime: number; // initial time in seconds
}

const Timer: React.FC<TimerProps> = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="flex flex-col items-center justify-center h-400 bg-gray-100 p-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">Timer</h1>

        <input
          placeholder="Enter Task"
          className="box-border h-3 w-50 p-4 border-2 rounded mr-2"
        />
        <button
          className={`border p-1 drop-shadow-md  text-black rounded ${
            "SomeCode" ? "bg-[#3ab7bf]" : "bg-[#f59e0b]"
          }`}
        >
          {"SomeCode" ? "Pause Timer" : "Start Timer"}
        </button>
        <div className="text-2xl font-semibold">
          {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
        </div>
      </div>
    </div>
  );
};

export default Timer;
