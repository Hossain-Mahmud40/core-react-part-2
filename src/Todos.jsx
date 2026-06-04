import { use } from "react";
import Todo from "./Todo";

export default function Todos({ todosPromise }) {
  const todos = use(todosPromise);
  console.log(todos);
  return (
    <div>
      <h2 className="card">All Todos</h2>
      {todos.map((todo) => (
        <Todo todo={todo}></Todo>
      ))}
    </div>
  );
}
