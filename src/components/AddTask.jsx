import { useState } from "react";

const AddTask = ({ onAddTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <>
      <input
        placeholder="Add task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(taskText);
          setTaskText("");
        }}
      >
        Add
      </button>
    </>
  );
};
export default AddTask;
