import TodoList from "./TodoList/TodoList";
import TodoDate from "./TodoDate/TodoDate";
import AddButton from "./AddButton/AddButton.js";
import TodoInput from "./TodoInput/TodoInput";
import { useEffect, useState } from "react";
import StyledTodo from "../styled/todo";
import {
  updateStorage,
  getStorage,
  resetStorage,
} from "../services/localStorage";
import { getDate } from "../utils/utilDate";
import StyledError from "../styled/error";

function Todo() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);

  const addHandler = (newTask) => {
    setList((prev) => {
      return [...prev, newTask];
    });
  };

  useEffect(() => {
    const data = getStorage();
    if (data && data.date === getDate("day")) {
      setList(data.tasks);
    } else {
      resetStorage();
    }
    const interval = setInterval(() => {
      if (getDate("day").toString() !== getStorage().date.toString()) {
        window.location.reload();
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [showInputBox, setShowInputBox] = useState(false);
  const addButtonHandler = () => {
    setShowInputBox(true);
  };
  const errorHandler = (error) => {
    setError(error);
  };
  const closeButtonHandler = () => {
    setShowInputBox(false);
  };
  const completeHandler = (id) => {
    setList((prev) => {
      return prev.map((todoItem, index) => {
        if (todoItem.id === id) {
          return {
            ...todoItem,
            isCompleted: !todoItem.isCompleted,
          };
        }
        return todoItem;
      });
    });
    const localTasks = JSON.parse(localStorage.getItem("todo_data"));
    const item = localTasks.tasks.find((currTask) => currTask.id === id);
    item.isCompleted = !item.isCompleted;
    updateStorage(item, id);
  };

  return (
    <StyledTodo>
      <TodoDate />

      <TodoList
        completeHandler={completeHandler}
        list={list}
        showInputBox={showInputBox}
      />

      {showInputBox && (
        <TodoInput
          addHandler={addHandler}
          errorHandler={errorHandler}
          setError={setError}
          closeButtonHandler={closeButtonHandler}
        />
      )}
      {error && (
        <StyledError
          transition={{ duration: 0.2 }}
          initial={{ x: "-90" }}
          animate={{ x: 0 }}
        >
          enter your task
        </StyledError>
      )}
      {!showInputBox && <AddButton onClick={addButtonHandler} />}
    </StyledTodo>
  );
}
export default Todo;
