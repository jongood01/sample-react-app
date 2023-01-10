import styles from "./todos.page.module.css";
import { TodoForm, TodosList } from "../components";
import { useEffect, useState } from "react";
import { Todo } from "../models";

export const TodosPage = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleSubmit(todo: Todo) {
    const newTodos = [...todos, todo];
    setTodos(newTodos);
  }

  return (
    <div className={styles.page}>
      <TodoForm onSubmit={handleSubmit} />
      <TodosList todos={todos} />
    </div>
  );
};
