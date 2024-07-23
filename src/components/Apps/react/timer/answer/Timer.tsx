import React, { useState, useEffect } from "react";
import TimerMillisec from "./TimerMillisec";

// Define the props interface for the Timer component
interface TimerProps {
  inputValue: number; // initial time in seconds
}

type InputEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

const Timer: React.FC = () => {
  // State to manage the input value (initial time in seconds)
  const [inputValue, setInputValue] = useState(60);
  // State to manage the time left for the timer
  const [timeLeft, setTimeLeft] = useState(0);
  // State to track if the timer is running
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;
    // If the timer is running and time is left, set an interval to decrement the time
    if (isRunning && timeLeft > 0) {
      timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Decrement the time by 1 second
    } else if (timeLeft === 0) {
      // If timeLeft reaches 0, stop the timer
      setIsRunning(false);
    }
    // Clear the interval when the component unmounts or when dependencies change
    return () => clearInterval(timerId);
  }, [inputValue, isRunning]);

  // Function to format the time into minutes and seconds
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Handler for input change to update the input value state
  const inputHandler = (event: ChangeEvent) => {
    setInputValue(Number(event?.target.value));
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
    <div className="flex flex-col items-center justify-center h-400 bg-gray-100 p-10">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">Timer</h1>

        {/* Input field to enter the initial time */}
        <input
          type="number"
          value={inputValue}
          onChange={inputHandler}
          placeholder="Enter Task"
          className="box-border h-3 w-50 p-4 border-2 rounded mr-2"
        />
        {/* Button to start or pause the timer */}
        <button
          onClick={isRunning ? pauseTimer : startTimer}
          className={`border p-1 drop-shadow-md  text-black rounded ${
            !isRunning ? "bg-[#3ab7bf]" : "bg-[#f59e0b]"
          }`}
        >
          {isRunning ? "Pause Timer" : "Start Timer"}
        </button>
        {/* Display the formatted time left */}
        <div className="text-2xl font-semibold">
          {timeLeft > 0 ? formatTime(timeLeft) : "Time's up!"}
        </div>
      </div>
      {/* Render the TimerMillisec component and pass the inputValue as a prop */}
      <TimerMillisec inputValue={inputValue} />
    </div>
  );
};

export default Timer;
