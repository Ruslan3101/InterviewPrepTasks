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
      <h1>Fix {task}</h1>
      <p>Details and functionality to fix {task}.</p>
      {validateTask() ? <TaskComponent /> : "No task found "}
    </div>
  );
}
