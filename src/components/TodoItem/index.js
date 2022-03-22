export function TodoItem(props) {
    return (
      <p id={`todo-item-${props.id}`}>
        <input type="checkbox" checked={props.completionStatus}></input>
        {!props.completionStatus ? "TODO: " : undefined}
        {props.title}
      </p>
    );
  }
  