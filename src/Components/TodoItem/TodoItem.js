import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import TodoItemDiv from "../../styled/todoItem";
import IconCheckDiv from "../../styled/iconCheck";
import TodoP from "../../styled/todoP";
function TodoItem(props) {
  const completeHandler = () => {
    props.completeHandler(props.id);
  };
  return (
    <IconContext.Provider
      value={{ className: props.isCompleted ? "completedIcon" : "checksIcon" }}
    >
      <TodoItemDiv
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        completed={props.isCompleted}
      >
        <TodoP>{props.value}</TodoP>
        <IconCheckDiv onClick={completeHandler} completed={props.isCompleted}>
          <FiCheck />
        </IconCheckDiv>
      </TodoItemDiv>
    </IconContext.Provider>
  );
}
export default TodoItem;
