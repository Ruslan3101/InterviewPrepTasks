import React from "react";
import { useParams } from "react-router-dom";
import { taskFixComponents } from "../taskFixComponents";
import FixCodeMessage from "../../ui/FixCodeMessage";

export default function TaskFixDisplay() {
  const { task } = useParams<{ task: string }>();

  const validateTask = () => {
    const taskName = task?.toLowerCase();
    if (!taskName) return false;
    const check = Object.keys(taskFixComponents).includes(taskName);
    return check;
    console.log(check);
  };

  const TaskComponent = taskFixComponents[task?.toLowerCase() || ""];
  return (
    <div>
      <h1 className="text-l mb-3 font-bold text-gray-600 ml-4 ">
        Fix {task} task
        <FixCodeMessage />
      </h1>

      {validateTask() ? <TaskComponent /> : <p>Task component not found</p>}
    </div>
  );
}
