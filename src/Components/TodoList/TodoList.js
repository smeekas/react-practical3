import TodoItem from "../TodoItem/TodoItem";
import TodoListDiv from "../../styled/todoList";

function TodoList(props) {
  const completeHandler = (id) => {
    props.completeHandler(id);
  };
  return (
    <TodoListDiv >
      {props.list.length > 0 ? (
        props.list.map((todoItem) => {
          return (
            <TodoItem
              key={todoItem.id}
              id={todoItem.id}
              value={todoItem.value}
              completeHandler={completeHandler}
              isCompleted={todoItem.isCompleted}
            />
          );
        })
      ) : (
        <p>no tasks.</p>
      )}
    </TodoListDiv>
  );
}
export default TodoList;
