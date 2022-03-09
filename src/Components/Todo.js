import TodoList from "./TodoList/TodoList";
import TodoDate from "./TodoDate/TodoDate";
import AddButton from "./AddButton/AddButton.js";
import TodoInput from "./TodoInput/TodoInput";
import { useEffect, useState } from "react";
import TodoDiv from "../styled/todo";

function Todo() {
  const [list, setList] = useState([]);
  const addHandler = (newTask) => {
    setList((prev) => {
      return [...prev, newTask];
    });
  };
  // const [curr, setCurr] = useState(new Date().getSeconds());
  // let current=new Date().getMinutes();
  useEffect(() => {
    // console.log(curr);
    const data = JSON.parse(localStorage.getItem("todo_data"));
    if (data && data.date === new Date().getMinutes()) {
      setList(data.tasks);
    } else {
      localStorage.setItem(
        "todo_data",
        JSON.stringify({
          date: new Date().getMinutes(),
          tasks: [],
        })
      );
    }
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
    localTasks.tasks = localTasks.tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isCompleted: true,
        };
      } else {
        return item;
      }
    });
    localStorage.setItem("todo_data", JSON.stringify(localTasks));
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
