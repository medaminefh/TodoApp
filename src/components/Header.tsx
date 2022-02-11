import { useRef, useEffect } from "react";
import type { TodoType } from "../App";

type HeaderProps = {
  submit: React.FormEventHandler<HTMLFormElement>;
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  todos: TodoType[];
};

const Header = (props: HeaderProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={props.submit} className="inputParend">
      <input
        ref={inputRef}
        name="inputBox"
        className="form-control"
        type={"text"}
        placeholder="What you want to do?..."
      />
    </form>
  );
};

export default Header;
