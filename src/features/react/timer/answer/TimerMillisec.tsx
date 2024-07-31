import React, { useState, useEffect } from "react";

// Define the props interface for the Timer component
interface TimerProps {
  inputValue: number; // initial time in seconds
}
type InputEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Timer: React.FC<TimerProps> = () => {
  // State to manage the input value (initial time in milliseconds)
  const [inputValue, setInputValue] = useState(50000);
  // State to manage the time left for the timer
  const [timeLeft, setTimeLeft] = useState(0);
  // State to track if the timer is running
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // If the timer is not running or time is up, do nothing
    if (!isRunning || timeLeft <= 0) return;

    // Set an interval to decrement the time left by 10 milliseconds
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 10);
    }, 10);

    // Clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(timerId);
  }, [isRunning, timeLeft]);

  // Function to format the time into minutes, seconds, and milliseconds
  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const ms = milliseconds % 1000;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}.${
      ms < 100 ? "0" : ""
    }${ms < 10 ? "0" : ""}${ms}`;
  };

  // Handler for input change to update the input value state
  const inputHandler = (event: ChangeEvent) => {
    setInputValue(Number(event.target.value) * 1000); // convert to milliseconds
  };

  // Function to start the timer
  const startTimer = () => {
    // If the timer is not running, set the time left to the input value
    if (timeLeft === 0) {
      setTimeLeft(inputValue);
    }
    // Set the timer to running state
    setIsRunning(true);
  };

  // Function to pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-400 bg-gray-100 mt-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">Timer With Milliseconds</h1>

        {/* Input field to enter the initial time in seconds */}
        <input
          type="text"
          value={inputValue / 1000} // convert to seconds for display
          onChange={inputHandler}
          placeholder="Enter Task"
          className="box-border h-3 w-50 p-4 border-2 rounded mr-2"
        />
        {/* Button to start or pause the timer */}
        <button
          onClick={isRunning ? pauseTimer : startTimer}
          className={`border p-1 drop-shadow-md text-black rounded ${
            !isRunning ? "bg-[#3ab7bf]" : "bg-yellow-500"
          }`}
        >
          {isRunning ? "Pause Timer" : "Start Timer"}
        </button>
        {/* Display the formatted time left */}
        <div className="text-2xl font-semibold">
          {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
        </div>
      </div>
    </div>
  );
};

export default Timer;
