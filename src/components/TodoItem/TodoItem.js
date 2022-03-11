import { FiCheck } from "react-icons/fi";
import { IconContext } from "react-icons";
import StyledTodoItem from "../../styled/todoItem";
import StyledIconCheck from "../../styled/iconCheck";
import StyledTodoParagraph from "../../styled/todoP";

function TodoItem(props) {
  const completeHandler = () => {
    props.completeHandler(props.id);
  };
  return (
    <IconContext.Provider
      value={{ className: props.isCompleted ? "completedIcon" : "checksIcon" }}
    >
      <StyledTodoItem
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        completed={props.isCompleted}
      >
        <StyledTodoParagraph>{props.value}</StyledTodoParagraph>
        <StyledIconCheck
          onClick={completeHandler}
          completed={props.isCompleted}
        >
          <FiCheck />
        </StyledIconCheck>
      </StyledTodoItem>
    </IconContext.Provider>
  );
}
export default TodoItem;
