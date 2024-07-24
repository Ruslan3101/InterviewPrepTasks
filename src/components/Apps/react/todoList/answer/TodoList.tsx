import React, { useState } from "react";

type InputEvent = React.FormEvent<HTMLFormElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface TodoItem {
  task: string;
  isCompleted: boolean;
}
const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (event: InputEvent) => {
    event?.preventDefault();
    if (!inputValue) return false;
    setTodos([...todos, { task: inputValue, isCompleted: false }]);
    setInputValue("");
  };

  const inputHandler = (event: ChangeEvent) => {
    setInputValue(event?.target.value);
  };

  const toggleCompletion = (index: number) => {
    setTodos(
      todos.map((todo, indexInTodoList) =>
        indexInTodoList === index
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      )
    );
  };

  const deleteHandler = (index: number) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const changeHandler = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, task: inputValue } : todo
      )
    );
  };

  return (
    <div className="flex flex-col items-center box-border  h-150 w-200 border-2 rounded">
      <h1 className="text-xl font-bold p-3 mb-6">Welcome to Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={inputHandler}
          placeholder="Enter Task"
          className="box-border h-3 w-50 p-4 border-2 rounded mr-2"
        />
        <button type="submit" className="button-blue">
          Add task
        </button>
      </form>
      <ul className="mb-6">
        {todos.map((todo, index) => (
          <li key={index} className="flex mt-5 ">
            <span
              className={`mr-2 font-bold ${
                todo.isCompleted ? "line-through" : ""
              }`}
            >
              {todo.task}
            </span>
            <div className=" flex justify-items-end">
              <button
                className="border rounded p-1 drop-shadow-md hover:bg-[#ef4444] bg-[#b91c1c] text-white ml-2"
                onClick={() => deleteHandler(index)}
              >
                Delete
              </button>
              <button
                className="border rounded p-1 drop-shadow-md hover:bg-[#22c55e] bg-[#166534] text-white ml-2 mr-2"
                onClick={() => toggleCompletion(index)}
              >
                {todo.isCompleted ? "Undo" : "Done"}
              </button>
              <button
                className="border rounded p-1 drop-shadow-md hover:bg-[#0ea5e9] bg-[#0284c7] text-white"
                onClick={() => changeHandler(index)}
              >
                Change
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
