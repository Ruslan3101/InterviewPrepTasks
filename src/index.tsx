import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Tasks from "./app/routes/tasks";
import Dashboard from "./app/routes/dashboard";
import ErrorPage from "./app/routes/errorPage";
import TaskFix from "./pages/TaskFix";
import TaskCreate from "./pages/TaskCreate";
import TaskAnswer from "./pages/TaskAnswer";




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
