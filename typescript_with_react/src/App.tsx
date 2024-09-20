/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from "react";
import InputField from "./components/InputField";
import "./App.css";
import Render from "./components/Render";

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div className="flex flex-col mx-4">
      <h1 className="text-2xl text-red-800 mx-auto mt-10">todooo </h1>
      <InputField todos={todos} setTodos={setTodos} />
      <Render todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
