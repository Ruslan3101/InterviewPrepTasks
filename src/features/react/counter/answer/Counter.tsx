import React, { useState } from "react";

const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prev) => prev + 1);
  };

  const decrement = () => {
    setCounter((prev) => prev - 1);
  };

  return (
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <button
        onClick={decrement}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        -
      </button>
      <h2 className="mx-4">Counter: {counter}</h2>
      <button
        onClick={increment}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
