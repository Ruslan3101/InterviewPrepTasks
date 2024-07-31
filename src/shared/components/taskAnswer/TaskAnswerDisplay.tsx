import React from "react";
import { useParams } from "react-router-dom";
import { taskAnswerComponents } from "../taskAnswerComponents";
export default function TaskAnswerDisplay() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    return Object.keys(taskAnswerComponents).includes(taskName);
  };

  const TaskComponent = taskAnswerComponents[task?.toLowerCase() || ""];

  return (
    <div>
      <h1 className="text-l mb-3 font-bold text-gray-600 ml-4 ">
        An answer to {task} task
      </h1>

      {validateTask() ? <TaskComponent /> : <p>Task component not found.</p>}
    </div>
  );
}
