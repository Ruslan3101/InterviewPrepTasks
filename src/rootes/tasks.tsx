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
      "Counter",
      "Axios",
      "TodoList",
      "Weather",
      "Carousel",
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
