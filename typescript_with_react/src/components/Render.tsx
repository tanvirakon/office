/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
type props = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};
const Render = ({ todos, setTodos }: props) => {
  // props kivabe nte hy..check notion
  const handleDlt = (index: number): void => {
    console.log(index);
    // todos.splice(index, 1);
    // setTodos(todos);
    // todos.splice(index, 1);
    // const newTodo = todos;
    // setTodos(newTodo);
    const newTodo = todos.filter((i, j) => {
      return j != index;
    });
    setTodos(newTodo);
  };

  return (
    <div>
      {todos.map((i, j) => (
        <div className="gap-2 flex" key={j}>
          {i}

          <button className="text-blue-700" onClick={() => handleDlt(j)}>
            dlt
          </button>
        </div>
      ))}
    </div>
  );
};

export default Render;
