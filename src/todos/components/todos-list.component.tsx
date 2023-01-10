import { Todo } from "../models";

interface TodosListProps {
  todos: Todo[];
}

export const TodosList = ({ todos }: TodosListProps) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.text}{" "}
          <input
            type="checkbox"
            value="1"
            checked={todo.complete}
            // This won't work of course
            onChange={(e) => (todo.complete = false)}
          />
        </li>
      ))}
    </ul>
  );
};
