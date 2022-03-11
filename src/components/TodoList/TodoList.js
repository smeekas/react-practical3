import TodoItem from "../TodoItem/TodoItem";
import StyledTodoList from "../../styled/todoList";
import StyledNoTask from "../../styled/noTask";
import StyledNoTaskParagraph from "../../styled/noTaskParagraph";
function TodoList(props) {
  const completeHandler = (id) => {
    props.completeHandler(id);
  };

  return (
    <StyledTodoList>
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
        <StyledNoTask><StyledNoTaskParagraph initial={{y:-200}} animate={{y:0}}>No tasks !</StyledNoTaskParagraph></StyledNoTask>
      )}
    </StyledTodoList>
  );
}
export default TodoList;
