export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "addTask": {
      return [
        ...tasks,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }
    case "changeTask": {
      return tasks.map((task) => {
        if (task.id === action.task.id) {
          return action.task;
        } else {
          return task;
        }
      });
    }
    case "deleteTask": {
      return tasks.filter((task) => task.id !== action.id);
    }

    default:
      return tasks;
  }
};
