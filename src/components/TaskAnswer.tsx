import React from "react";
import { useParams } from "react-router-dom";
import { answerComponents } from "./Apps/indexAnswer";
import { log } from "console";
export default function TaskAnswer() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    return Object.keys(answerComponents).includes(taskName);
  };

  const TaskComponent = answerComponents[task?.toLowerCase() || ""];
  console.log("Task Comoponent", TaskComponent);

  return (
    <div>
      <h1 className="text-xl mb-3 font-bold">Answer to {task} task</h1>

      {validateTask() ? <TaskComponent /> : <p>Task component not found.</p>}

      {/* <button onClick={validateTask}>Click to Start </button> */}
    </div>
  );
}
