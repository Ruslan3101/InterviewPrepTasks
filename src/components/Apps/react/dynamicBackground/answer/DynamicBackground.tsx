import React, { useState } from "react";

const DynamicBackground: React.FC = () => {
  const [bgColor, setBgColor] = useState("bg-white");

  const colors = [
    "bg-red-500",
    "bg-green-500",
    "bg-blue-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
  ];

  const handleClick = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBgColor(randomColor);
  };

  return (
    <div
      className={`flex flex-col items-center justify-center  rounded-md h-96 max-h-full md:max-h-screen  ${bgColor}`}
      onClick={handleClick}
    >
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold mb-4">Dynamic Background</h1>
        <p className="text-lg text-gray-700">
          Click anywhere to change the background color.
        </p>
      </div>
    </div>
  );
};

export default DynamicBackground;
