import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import StyledTodoInput from "../../styled/todoInput";
import { addItemToStorage } from "../../services/localStorage";


function TodoInput(props) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const inputHandler = (event) => {
    setError(false);
    props.setError(false);
    setTask(event.target.value);
  };
useEffect(()=>{
  const timeout=setTimeout(()=>{
    setError(false);
    props.setError(false);
  },3000)
  return ()=>{
    clearTimeout(timeout)
  }
},[error,props])
  const enterEsc = (event) => {
    if (event.key === "Enter") {
      if (task.trim().length === 0) {
        props.setError(true);
        setError(true);
        return;
      }
      const newTask = {
        id: Math.random().toString(),
        value: task,
        isCompleted: false,
      };
      addItemToStorage(newTask);
      props.addHandler(newTask);
      setTask("");
    }
    if (event.keyCode === 27) {
      props.closeButtonHandler();
      props.setError(false);
    }
  };
  return (
    <AnimatePresence>
      <StyledTodoInput
        placeholder="your task.."
        className={error ? "error" : ""}
        onChange={inputHandler}
        onKeyUp={enterEsc}
        type="text"
        value={task}
        animate={{ y: 0, opacity: 1 }}
        initial={{
          y: 50,
          opacity: 0,
        }}
        transition={{ duration: 0.2, type: "spring", stiffness: 200 }}
      />
    </AnimatePresence>
  );
}

export default TodoInput;
