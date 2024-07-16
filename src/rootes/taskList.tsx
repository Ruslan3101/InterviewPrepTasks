import {useParams } from "react-router-dom";

export default function TaskList() {
  const { task } = useParams<{ task: string }>();

  return (
    <div>
     <h1 className="text-2xl font-bold">{task?.toUpperCase()}</h1>
    </div>
  );
}
