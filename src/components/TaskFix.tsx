import React from "react";
import { useParams } from "react-router-dom";
import { fixComponents } from "./Apps/indexFix";

export default function TaskFix() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    const check = Object.keys(fixComponents).includes(taskName);
    return check;
    console.log(check);
  };

  const TaskComponent = fixComponents[task?.toLowerCase() || ""];
  return (
    <div>
      <h1 className="text-xl mb-3 font-bold text-gray-600 ">Fix {task} task</h1>

      {validateTask() ? <TaskComponent /> : <p>Task component not found</p>}
    </div>
  );
}
