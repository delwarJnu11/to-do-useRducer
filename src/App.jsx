import { useReducer } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { initialTasks } from "./data/data";
import { taskReducer } from "./useReducers/taskReducers";

const getNextId = (tasks) => {
  if (tasks.length > 0) {
    const maxId = tasks.reduce((prev, current) =>
      prev && prev.id > current.id ? prev.id : current.id
    );
    return maxId + 1;
  } else {
    return 0;
  }
};

const App = () => {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);

  // add task handler
  const handleAddTask = (text) => {
    dispatch({
      type: "addTask",
      text,
      id: getNextId(tasks),
    });
  };

  // handle Edit Task
  const handleChangeTask = (newTask) => {
    dispatch({
      type: "changeTask",
      task: newTask,
    });
  };

  // handle Delete Task
  const handleDeleTask = (taskId) => {
    dispatch({
      type: "deleteTask",
      id: taskId,
    });
  };

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleTask}
      />
    </>
  );
};
export default App;
