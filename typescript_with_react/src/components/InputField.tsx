/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";

type props = {
  todos: string[];
  setTodos: React.Dispatch<React.SetStateAction<string[]>>;
};

const InputField = ({ todos, setTodos }: props) => {
  const [value, setValue] = useState<string>("");
  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTodos([...todos, value]);
    setValue("");
  };
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        id="input"
        value={value}
        className="bg-gray-100 p-2"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="bg-red-300 p-2 cursor-pointer">
        okay
      </button>
    </form>
  );
};

export default InputField;
