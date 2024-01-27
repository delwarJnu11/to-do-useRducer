import { useState } from "react";

const Task = ({ task, onChangeTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  let decideWhatToRender;
  if (isEditing) {
    decideWhatToRender = (
      <>
        <input
          value={task.text}
          onChange={(e) => {
            onChangeTask({
              ...task,
              text: e.target.value,
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    decideWhatToRender = (
      <>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) => {
          onChangeTask({
            ...task,
            done: e.target.checked,
          });
        }}
      />
      {decideWhatToRender}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </label>
  );
};
export default Task;
