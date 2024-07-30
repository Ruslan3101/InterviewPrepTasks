import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import TaskList from "./taskList";

const Tasks: React.FC = () => {
  const tasks = {
    javascript: [
      "Promise",
      "Fetch",
      "Closure",
      "HoC",
      "Async/Await",
      "Event Loop",
      "DOM Manipulation",
      "Array Methods",
    ],
    react: [
      //Beginner Level
      "Counter", // Create counter that has to increase and decrease by one
      "Timer", //Create a timer that counts down from a specified time.
      "TodoList", //Develop a to-do list application with features to add and remove tasks.
      "Dynamic Background", //Create a component that changes its background color when clicked.
      "Data Fetch JSON", //Build a component that fetches and displays data from a JSON file in different folder.
      "Data Fetch Axios API", ///Build a component that fetches and displays data from an external API
      "Routing Setup", //Set up a basic routing system using React Router.
      "Random Quote Generation", //Build a component that displays a random quote each time it's rendered.
      "File Uploader", //Develop a file uploader component that allows users to upload images.
      "Authentication Form", //Implement a basic authentication form with login and registration.
      "Weather App", //Build a weather app that fetches and displays weather information based on the user's location.
      //Intermediate Level
      "Search Bar", //Create a search bar that filters a list of items based on user input.
      "Real Time Chat App", //App: Build a chat application with real-time messaging using WebSockets.
      "Drag and Drop", //Implement drag-and-drop functionality to reorder a list of items.
      "Image Carousel", //Create a carousel component that displays multiple images in a slideshow.
      "Multi Step Form", //Develop a multi-step form with progress indicators.
      "Pagination", //Build a pagination component to navigate through a large list of items.
      "Color Picker", //Implement a color picker that allows users to select a color.
      "Responsive Navigation Menu", //Create a responsive navigation menu with a hamburger icon.
      "User Profile Page", //Develop a user profile page that displays user information and allows editing.
      "Text Search and Highlight", //Implement a search and highlight feature for a long text document.
      "File Download", //Create a file download component that allows users to download files.
      "Quiz App", //Build a quiz application with a timer and scoring system.
      "Kanban Board", // Develop a task management application with features like adding, editing, and deleting tasks.

      "Accordion",
      "Shopping Cart",
      "LocalStorage Hook",
      "Context API",
      "Error Boundaries",
      "Fragments",
    ],
    css: [
      "Flexbox",
      "Grid",
      "Animations",
      "Transitions",
      "Responsive Design",
      "Selectors",
      "Variables",
      "Pseudo-classes",
    ],
    typescript: [
      "Interfaces",
      "Types",
      "Generics",
      "Enums",
      "Modules",
      "Namespaces",
      "Decorators",
      "Utility Types",
    ],
  };

  const { language } = useParams<{ language: string }>();
  const languageTasks = tasks[language as keyof typeof tasks] || [];

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;
  const totalPages = Math.ceil(languageTasks.length / tasksPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [language]);
  // Get current tasks
  const currentTasks = languageTasks.slice(
    (currentPage - 1) * tasksPerPage,
    currentPage * tasksPerPage
  );

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };
  return (
    <div>
      <h1 className="p-4 text-2xl font-bold">
        {language?.toUpperCase() || "Language Not available"}
      </h1>
      <ul className="mt-4 space-y-2">
        {currentTasks.length ? (
          currentTasks.map((task, index) => (
            <li
              key={index}
              className="flex justify-between items-center block py-2 px-4 rounded bg-gray-100 hover:bg-gray-200"
            >
              {/* <Link
                to={`${task.toLowerCase()}`}
                className="block py-2 px-4 rounded bg-gray-100 hover:bg-gray-200"
              > */}
              {/* </Link> */}
              <div>{task}</div>
              <div className="flex  space-x-4 mr-4">
                <Link
                  to={`fix/${task.toLowerCase()}`}
                  className="text-blue-500 hover:underline"
                >
                  Fix
                </Link>
                <Link
                  to={`create/${task.toLowerCase()}`}
                  className="text-green-800 hover:underline"
                >
                  Create
                </Link>
                <Link
                  to={`answer/${task.toLowerCase()}`}
                  className="text-red-500 hover:underline"
                >
                  Answer
                </Link>
              </div>
            </li>
          ))
        ) : (
          <p>
            <i>No tasks</i>
          </p>
        )}
      </ul>
      {/* Pagination controls */}
      {languageTasks.length > tasksPerPage && (
        <div className="mt-4 flex justify-between items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 shadow-2xl rounded hover:bg-gray-400 disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 "
          >
            Next
          </button>
        </div>
      )}

      <div className=" mt-4 border-t border-gray-50 shadow-top ">
        <div className="p-4">
          <TaskList />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Tasks;
