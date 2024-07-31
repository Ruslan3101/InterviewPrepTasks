import React, { useState } from "react";

const Counter = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [counter, setCounter] = useState(1);

  const increment = () => {
    setCounter(counter * 3);
  };

  const decrement = () => {
    setCounter(counter - 2);
  };
  return (
    <div style={style}>
      <h1 className="text-xl font bold">
        Counter should begin from 0 and increase and decrease by 1
      </h1>
      <button onClick={decrement}>-</button>
      <h2 style={{ margin: "0 10px" }}>counter: {counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
