import { useState } from "react";

import type { TodoType } from "../App";

type ListOfTodosProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const ListOfTodos = ({ todos, setTodos }: ListOfTodosProps) => {
  const [list, setList] = useState(todos);

  // handle click event
  const handleClick = function (index: number, name?: string) {
    if (!name) {
      const updatedTodos = todos?.map((todo) => {
        if (todo === todos[index]) {
          return { ...todo, done: !todos[index]?.done };
        }
        return todo;
      });
      setTodos(updatedTodos);
      return;
    }

    if (name === "active") {
      const activeTodos = list.filter((todo) => !todo.done);
      setTodos(activeTodos);
    } else if (name === "inactive") {
      const activeTodos = list.filter((todo) => todo.done);
      setTodos(activeTodos);
    } else if (name === "delete") {
      setList([]);
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
        {todos?.map((todo, index) => (
          <tr key={index}>
            <th>
              {!todo.done ? (
                <i
                  onClick={() => handleClick(index)}
                  className="bi bi-circle"
                  role="button"
                ></i>
              ) : (
                <i
                  onClick={() => handleClick(index)}
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
              name="active"
              onClick={() => handleClick(2, "active")}
            >
              Active
            </button>
            <button
              className="bg-transparent border-0 text-light"
              name="inactive"
              onClick={() => handleClick(2, "inactive")}
            >
              Inactive
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
