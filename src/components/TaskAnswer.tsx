import React from "react";
import { useParams } from "react-router-dom";
import { answerComponents } from "./Apps/indexAnswer";
export default function TaskAnswer() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    return Object.keys(answerComponents).includes(taskName);
  };

  const TaskComponent = answerComponents[task?.toLowerCase() || ""];
  console.log("Task Component", TaskComponent);

  return (
    <div>
      <h1 className="text-xl mb-3 font-bold text-gray-600 ">An answer to {task} task</h1>

      {validateTask() ? <TaskComponent /> : <p>Task component not found.</p>}
    </div>
  );
}
