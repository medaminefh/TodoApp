import { useState } from "react";
import Header from "./components/Header";
import ListOfTodos from "./components/ListOfTodos";

export type TodoType = {
  id: number;
  todo: string | undefined;
  done: boolean;
  isEdit: boolean;
};

const defaultTodos = [
  {
    id: 1,
    todo: "Fix some issues in the portfolio",
    done: false,
    isEdit: false,
  },
  {
    id: 2,
    todo: "Learn the deutsh language",
    done: false,
    isEdit: false,
  },
  {
    id: 3,
    todo: "Learn the communication skills",
    done: false,
    isEdit: false,
  },
  {
    id: 4,
    todo: "Get A Job",
    done: false,
    isEdit: false,
  },
];

function App() {
  const [todos, setTodos] = useState<TodoType[]>(defaultTodos);

  return (
    <div className="App container">
      <Header setTodos={setTodos} todos={todos} />
      <ListOfTodos setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
