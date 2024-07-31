import React, { useState } from "react";

const Counter = () => {
  return (
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
        -
      </button>
      <h2 className="mx-4">Counter:</h2>
      <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
        +
      </button>
    </div>
  );
};

export default Counter;
