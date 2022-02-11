import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListOfTodos from "./components/ListOfTodos";

type TodoType = {
  todo: string;
  done: boolean;
};

export type TodosTypes = TodoType[];

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
  const [todos, setTodos] = useState(defaultTodos);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos([{ todo: "Yeees", done: true }]);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    console.log(e.currentTarget.value);
  };

  return (
    <div className="App">
      <Header
        setTodos={setTodos}
        todos={todos}
        change={handleChange}
        submit={handleSubmit}
      />
      <ListOfTodos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
