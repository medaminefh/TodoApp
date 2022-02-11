type ListOfTodosProps = {
  todos: [];
  setTodos: React.Dispatch<
    React.SetStateAction<
      {
        todo: string;
        done: boolean;
      }[]
    >
  >;
};

const ListOfTodos = ({ todos, setTodos }: ListOfTodosProps) => {
  const handleClick = (e: React.FormEvent, index: number) => {
    console.log(e.currentTarget, index, todos?.[index]);

    const updatedTodos = todos?.map((todo) => {
      if (todo === todos[index]) {
        return { ...todo, done: !todos[index].done };
      }
      return todo;
      setTodos(updatedTodos);
    });
  };

  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr aria-colspan={3}>
          <th className="text-center">Todo</th>
        </tr>
      </thead>
      <tbody>
        {todos?.map((todo, index) => (
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
            <td>{todo.todo}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>Clear</tfoot>
    </table>
  );
};

export default ListOfTodos;
