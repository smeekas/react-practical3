import TodoList from "./TodoList/TodoList";
import TodoDate from "./TodoDate/TodoDate";
import AddButton from "./AddButton/AddButton.js";
import TodoInput from "./TodoInput/TodoInput";
import { useEffect, useState } from "react";
import TodoDiv from "../styled/todo";
import {
  updateStorage,
  getStorage,
  resetStorage,
} from "../services/localStorage";
import { getDay } from "../utils/utilDate";
function Todo() {
  const [list, setList] = useState([]);

  const addHandler = (newTask) => {
    setList((prev) => {
      return [...prev, newTask];
    });
  };

  useEffect(() => {
    const data = getStorage();
    if (data && data.date === getDay()) {
      setList(data.tasks);
    } else {
      resetStorage();
    }
    const interval = setInterval(() => {
      if (getDay().toString() !== getStorage().date.toString()) {
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
    <TodoDiv>
      <TodoDate />

      <TodoList
        completeHandler={completeHandler}
        list={list}
        showInputBox={showInputBox}
      />
      {showInputBox && (
        <TodoInput
          addHandler={addHandler}
          closeButtonHandler={closeButtonHandler}
        />
      )}
      {!showInputBox && <AddButton onClick={addButtonHandler} />}
    </TodoDiv>
  );
}
export default Todo;
