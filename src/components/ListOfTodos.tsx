import { useState, useEffect } from "react";

import type { TodoType } from "../App";

type ListOfTodosProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const ListOfTodos = ({ todos, setTodos }: ListOfTodosProps) => {
  const [uiTodos, setUiTodos] = useState(todos);

  useEffect(() => {
    setUiTodos(todos);
  }, [todos]);

  // handle click event
  const handleClick = function (index: number, name?: string) {
    if (!name) {
      let updatedTodos = todos?.map((todo) => {
        if (todo.id === index) {
          return { ...todo, done: !todo.done };
        }
        return todo;
      });
      const incompletedTodos = updatedTodos.filter(
        (todo) => todo.done === false
      );
      const completedTodos = updatedTodos.filter((todo) => todo.done === true);

      setUiTodos([...incompletedTodos, ...completedTodos]);
      setTodos([...incompletedTodos, ...completedTodos]);
      return;
    }

    if (name === "all") {
      setUiTodos(todos);
    } else if (name === "done") {
      const activeTodos = todos.filter((todo) => todo.done);
      setUiTodos(activeTodos);
    } else if (name === "deleteOne") {
      setTodos((prev) => prev.filter((todo) => todo.id !== index));
    } else if (name === "delete") {
      setTodos([]);
    }
  };

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th className="text-center">Todo</th>
        </tr>
      </thead>
      <tbody>
        {uiTodos?.map((todo) => (
          <tr key={todo.id}>
            <th>
              {!todo.done ? (
                <i
                  onClick={() => handleClick(todo.id)}
                  className="bi bi-circle"
                  role="button"
                ></i>
              ) : (
                <i
                  onClick={() => handleClick(todo.id)}
                  className="bi bi-check-circle"
                  role="button"
                ></i>
              )}
            </th>
            <td
              className={
                todo.done ? "text-decoration-line-through text-secondary" : ""
              }
            >
              {" "}
              {todo.todo}
              <button
                className="bg-transparent border-0 text-danger float-end"
                title="Delete"
                onClick={() => handleClick(todo.id, "deleteOne")}
              >
                <i className="bi bi-trash"></i>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot className="bg-secondary text-light">
        <tr>
          <td></td>
          <td className="d-flex justify-content-between align-self-end">
            <button
              className="bg-transparent border-0 text-light"
              name="all"
              title="All Todos"
              onClick={() => handleClick(2, "all")}
            >
              All
            </button>
            <button
              className="bg-transparent border-0 text-light"
              name="done"
              title="Done Todos"
              onClick={() => handleClick(2, "done")}
            >
              Done
            </button>
            <button
              className="bg-transparent border-0 text-light"
              title="Delete all"
              onClick={() => handleClick(2, "delete")}
            >
              <i className="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ListOfTodos;
