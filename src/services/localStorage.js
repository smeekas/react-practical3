import { getDay } from "../utils/utilDate";
const addItemToStorage = (newItem) => {
  const localTasks = JSON.parse(localStorage.getItem("todo_data"));
  localStorage.setItem(
    "todo_data",
    JSON.stringify({
      date: getDay(),
      tasks: [...localTasks.tasks, newItem],
    })
  );
};
const resetStorage = () => {
  localStorage.setItem(
    "todo_data",
    JSON.stringify({
      date: getDay(),
      tasks: [],
    })
  );
};
const updateStorage = (newTask, id) => {
  const localTasks = JSON.parse(localStorage.getItem("todo_data"));
  localTasks.tasks = localTasks.tasks.map((currTask) => {
    if (currTask.id === id) {
      return newTask;
    } else {
      return currTask;
    }
  });
  localStorage.setItem("todo_data", JSON.stringify(localTasks));
};
const getStorage = () => {
  return JSON.parse(localStorage.getItem("todo_data"));
};
export { updateStorage, addItemToStorage, resetStorage, getStorage };
