import React from "react";
import { useParams } from "react-router-dom";
import { createComponents } from "../components/Apps/indexCreate";
export default function TaskCreate() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    return Object.keys(createComponents).includes(taskName);
  };

  const TaskComponent = createComponents[task?.toLowerCase() || ""];

  return (
    <div>
      <h1 className="text-xl mb-3 font-bold text-gray-600 ">Create {task} task</h1>
      {validateTask() ? <TaskComponent /> : <p>Task component not found</p>}
    </div>
  );
}
