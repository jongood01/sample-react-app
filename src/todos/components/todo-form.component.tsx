import { FormEvent, useState } from "react";
import { Todo } from "../models";

interface TodoFormProps {
  onSubmit: (todo: Todo) => void;
}

export const TodoForm = ({ onSubmit }: TodoFormProps) => {
  const [todoText, setTodoText] = useState("");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit({ text: todoText, complete: false });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoText">
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
        />
      </label>
      <button type="submit">Add todo</button>
    </form>
  );
};
