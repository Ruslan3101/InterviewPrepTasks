import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Stopwatch from "../components/stopwatch/Stopwatch";
import Timer from "../components/timer/Timer";

const Dashboard: React.FC = () => {
  const languages = ["React", "JavaScript", "CSS", "TypeScript"];
  const times = ["Stopwatch", "Timer"];
  const navigate = useNavigate();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white flex-shrink-0">
        <div className="p-5">
          <h1 className="text-xl font-bold" onClick={handleHomeClick}>
            Choose the language
          </h1>
          {/* <button onClick={handleHomeClick}>Go to main</button> */}

          <nav className="mt-4">
            {languages.length ? (
              <ul className="space-y-2">
                {languages.map((language, index) => (
                  <li key={index}>
                    <NavLink
                      to={`${language.toLowerCase()}/tasks`}
                      className="block py-2 px-4 rounded hover:bg-gray-700"
                    >
                      {language}
                    </NavLink>
                  </li>
                ))}
              </ul>
            ) : (
              <p>
                <i>No languages</i>
              </p>
            )}
          </nav>
          <div className="mt-4 border-solid border-2 border-gray-500 rounded-md">
            <div className="flex justify-center space-x-4 p-3">
              {times.map((time, index) => (
                <button
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded"
                  key={index}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="w-50 h-30 flex items-center justify-center bg-gray-700 rounded-md">
              {selectedTime === "Stopwatch" && <Stopwatch />}
              {selectedTime === "Timer" && <Timer />}
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
