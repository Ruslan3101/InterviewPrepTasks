import React, { useState, useEffect } from "react";

const quotes = [
  {
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    text: "If life were predictable it would cease to be life, and be without flavor.",
    author: "Eleanor Roosevelt",
  },
  {
    text: "If you look at what you have in life, you'll always have more.",
    author: "Oprah Winfrey",
  },
  {
    text: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
    author: "James Cameron",
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
];

const getRandomQuote = () => {
  const randomIndex = Math.ceil(Math.random() * quotes.length);
  return quotes[randomIndex];
};

const RandomQuoteGeneration: React.FC = () => {
  const [quote, setQuote] = useState();

  useEffect(() => {
    setQuote(quote);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
      <span className="animate-pulse text-xl font-bold flex justify-center text-gray-400 mb-5">
        Reload Page
      </span>
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md text-center">
        <p className="text-2xl font-semibold mb-4">"text"</p>
        <p className="text-lg text-gray-700">- "author"</p>
      </div>
    </div>
  );
};

export default RandomQuoteGeneration;
