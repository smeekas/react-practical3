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
const getStorage = () => {
  return JSON.parse(localStorage.getItem("todo_data"));
};
export { addItemToStorage, resetStorage,getStorage };
