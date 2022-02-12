import { useRef, useEffect, useState } from "react";
import type { TodoType } from "../App";

type HeaderProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todos: TodoType[];
};

const Header = (props: HeaderProps) => {
  const [value, setValue] = useState<string>("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask = { todo: value, done: false };

    props.setTodos((prev) => [newTask, ...prev]);
    setValue("");
  };

  // handle the change event of the input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget?.value);
  };

  useEffect(() => {
    // make the input field focused in the first render!
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="inputParend">
      <input
        ref={inputRef}
        type={"text"}
        name="inputBox"
        value={value}
        onChange={handleChange}
        className="form-control"
        placeholder="What you want to do?..."
      />
    </form>
  );
};

export default Header;
