import "./index.css";
import { TodoApp } from "./components/TodoApp";
import { DarkMode } from "./components/DarkMode";

let todoData = [
  { title: "Item 1", completionStatus: undefined, id: 1 },
  { title: "Item 2", completionStatus: undefined, id: 2 },
  { title: "Item 3", completionStatus: undefined, id: 3 },
  { title: "Item 4", completionStatus: undefined, id: 4 },
];
let todoLists = [
  {
    name: "Work",
    items: todoData,
  },
  {
    name: "Home",
    items: todoData,
  },
];

function App() {
  return (
    <div>
      <TodoApp data={todoLists}></TodoApp>
      <DarkMode></DarkMode>
    </div>
  );
}

export default App;