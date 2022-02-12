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
    todo: "Fix some issues in the portfolio",
    done: false,
  },
  {
    todo: "Learn the deutsh language",
    done: false,
  },
  {
    todo: "Learn the communication skills",
    done: false,
  },
  {
    todo: "Get A Job",
    done: false,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

  return (
    <div className="App">
      <Header setTodos={setTodos} todos={todos} />
      <ListOfTodos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
