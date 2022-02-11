import type { TodoType } from "../App";

type ListOfTodosProps = {
  todos: TodoType[];
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

const ListOfTodos = ({ todos, setTodos }: ListOfTodosProps) => {
  // handle click event
  const handleClick = (e: React.FormEvent, index: number) => {
    console.log(e.currentTarget, index, todos?.[index]);

    const updatedTodos = todos?.map((todo) => {
      if (todo === todos[index]) {
        return { ...todo, done: !todos[index].done };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th className="text-center">Todo</th>
        </tr>
      </thead>
      <tbody>
        {todos?.sort()?.map((todo, index) => (
          <tr key={index}>
            <th>
              {!todo.done ? (
                <i
                  onClick={(e) => handleClick(e, index)}
                  className="bi bi-circle"
                  role="button"
                ></i>
              ) : (
                <i
                  onClick={(e) => handleClick(e, index)}
                  className="bi bi-check-circle"
                  role="button"
                ></i>
              )}
            </th>
            <td className={todo.done ? "text-decoration-line-through" : ""}>
              {" "}
              {todo.todo}
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td></td>
          <td className="text-end">Clear</td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ListOfTodos;
