import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks from "./rootes/tasks";
import Dashboard from "./rootes/dashboard";
import ErrorPage from "./rootes/errorPage";
import TaskFix from "./components/TaskFix";
import TaskCreate from "./components/TaskCreate";
import TaskAnswer from "./components/TaskAnswer";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <App />,
  //   // loader: rootLoader,
  //   // children: [
  //   //   {
  //   //     path: "/tasks",
  //   //     element: <Tasks />,
  //   //     // loader: teamLoader,
  //   //   },
  //   // ],
  // },
  {
    path: "/",
    element: <Dashboard />,
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
