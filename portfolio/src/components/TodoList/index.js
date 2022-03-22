import { TodoItem } from "../TodoItem";
export function TodoList(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.items.map((i, index) => (
        <TodoItem {...i}></TodoItem>
      ))}
    </div>
  );
}