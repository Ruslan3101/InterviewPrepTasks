import React from "react";
import ReactDOM from "react-dom/client";
import "./app/styles/index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks from "./app/routes/tasks";
import Dashboard from "./app/routes/dashboard";
import ErrorPage from "./app/routes/errorPage";
import TaskFix from "./shared/components/taskFix/TaskFixDisplay";
import TaskCreate from "./shared/components/taskCreate/TaskCreateDisplay";
import TaskAnswer from "./shared/components/taskAnswer/TaskAnswerDisplay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":language/:tasks",
        element: <Tasks />,
        children: [
          {
            path: "fix/:task",
            element: <TaskFix />,
          },
          {
            path: "create/:task",
            element: <TaskCreate />,
          },
          {
            path: "answer/:task",
            element: <TaskAnswer />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);

reportWebVitals();
