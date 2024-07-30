import React, { useState } from "react";

type InputEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

interface TodoItem {
  task: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  const addTodo = (event: InputEvent) => {
    event.preventDefault();
    if (!inputValue) return false;
    setTodos([...todos, { task: inputValue, isCompleted: false }]);
    setInputValue("");
    setIsEditing(false);
  };

  const inputHandler = (event: ChangeEvent) => {
    setInputValue(event.target.value);
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
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editHandler = (index: number) => {
    setInputValue(todos[index].task);
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const updateTodo = (event: InputEvent) => {
    event.preventDefault();
    if (currentIndex !== null) {
      setTodos(
        todos.map((todo, index) =>
          index === currentIndex ? { ...todo, task: inputValue } : todo
        )
      );
      setInputValue("");
      setIsEditing(false);
      setCurrentIndex(null);
    }
  };

  return (
    <div className="flex flex-col items-center box-border h-150 w-200 border-2 rounded">
      <h1 className="text-xl font-bold p-3 mb-6">Welcome to Todo List</h1>
      <div className="flex">
        <input
          type="text"
          value={inputValue}
          onChange={inputHandler}
          placeholder="Enter Task"
          className="box-border h-3 w-50 p-4 border-2 rounded mr-2"
        />
        {!isEditing ? (
          <button onClick={addTodo} className="button-blue">
            Add task
          </button>
        ) : (
          <button
            className="border rounded p-1 drop-shadow-md hover:bg-[#0ea5e9] bg-[#0284c7] text-white"
            onClick={updateTodo}
          >
            Change
          </button>
        )}
      </div>

      <ul className="mb-6">
        {todos.map((todo, index) => (
          <li key={index} className="flex mt-5">
            <span
              className={`mr-2 font-bold ${
                todo.isCompleted ? "line-through" : ""
              }`}
            >
              {todo.task}
            </span>
            <div className="flex justify-items-end">
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
                onClick={() => editHandler(index)}
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
