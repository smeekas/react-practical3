import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import TodoInputinput from "../../styled/todoInput";

function TodoInput(props) {
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const inputHandler = (event) => {
    setError(false);
    setTask(event.target.value);
  };

  const enterEsc = (event) => {
    if (event.key === "Enter") {
      //   console.log("entered");
      if (task.trim().length === 0) {
        setError(true);
        return;
      }
      const newTask = {
        id: Math.random().toString(),
        value: task,
        isCompleted: false,
      };
      const localTasks = JSON.parse(localStorage.getItem("todo_data"));
      localStorage.setItem(
        "todo_data",
        JSON.stringify({
          date: new Date().getMinutes(),
          tasks: [...localTasks.tasks, newTask],
        })
      );
      props.addHandler(newTask);
      setTask("");
    }
    if (event.keyCode === 27) {
      props.closeButtonHandler();
    }
  };
  return (
    <AnimatePresence>
      <TodoInputinput
        placeholder="your task.."
        className={error ? "error" : ""}
        onChange={inputHandler}
        onKeyUp={enterEsc}
        type="text"
        value={task}
        animate={{ y: 0, opacity: 1, }}
        initial={{
          y: 50,
          opacity: 0,
        }}
      />
    </AnimatePresence>
  );
}

export default TodoInput;
