import React from "react";
import { useParams } from "react-router-dom";
import { taskCreateComponents } from "../taskCreateComponents";
export default function TaskCreateDisplay() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    return Object.keys(taskCreateComponents).includes(taskName);
  };

  const TaskComponent = taskCreateComponents[task?.toLowerCase() || ""];

  return (
    <div>
      <h1 className="text-l mb-3 font-bold text-gray-600 ml-4  ">
        Create {task} task
      </h1>
      {validateTask() ? <TaskComponent /> : <p>Task component not found</p>}
    </div>
  );
}
