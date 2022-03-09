import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import TodoItemDiv from "../../styled/todoItem";
import IconCheckDiv from "../../styled/iconCheck";
function TodoItem(props) {
  const completeHandler = () => {
    props.completeHandler(props.id);
  };
  return (
    <IconContext.Provider
      value={{ className: props.isCompleted ? "completedIcon" : "checksIcon" }}
    >
      <TodoItemDiv completed={props.isCompleted}>
        <p>{props.value}</p>
        <IconCheckDiv onClick={completeHandler} completed={props.isCompleted}>
          <FiCheck />
        </IconCheckDiv>
      </TodoItemDiv>
    </IconContext.Provider>
  );
}
export default TodoItem;
