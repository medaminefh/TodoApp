import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListOfTodos from "./components/ListOfTodos";

export type TodoType = {
  todo: string | undefined;
  done: boolean;
};

const defaultTodos = [
  {
    todo: "Hello world!, This is the 1st Todo",
    done: false,
  },
  {
    todo: "Yep I need a Job Todo",
    done: true,
  },
  {
    todo: "bla bla",
    done: false,
  },
  {
    todo: "Hate Yourself",
    done: true,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo = e.currentTarget.querySelector("input");

    const newTask = { todo: todo?.value, done: false };

    setTodos((prev) => [...prev, newTask]);
  };

  return (
    <div className="App">
      <Header setTodos={setTodos} todos={todos} submit={handleSubmit} />
      <ListOfTodos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
