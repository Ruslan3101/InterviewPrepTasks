import React, { useState } from "react";

const Counter = () => {
  const style = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div style={style}>
      <button onClick={decrement}>-</button>
      <h2 style={{ margin: "0 10px" }}>counter: {counter}</h2>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Counter;
