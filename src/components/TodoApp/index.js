import { TodoList } from "../TodoList";

export function TodoApp({ data }) {
  let elementArray = data.map((list) => <TodoList {...list}></TodoList>);
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={elementArray}>
        <input type="text" placeholder="Enter a task" />
        <button>Submit</button>
      </form>
      {elementArray}
    </div>
  );
}