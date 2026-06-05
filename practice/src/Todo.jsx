import { useState } from "react";

const storageKey = "TASK";

export const Todo = () => {
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem(storageKey)) || ["JS", "React"]
  );

  const [task, setTask] = useState("");

  const addTask = () => {
    setTaskList([...taskList, task]);
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTask}>
        Add
      </button>

      {taskList.map((task, index) => (
        <div key={index}>
          {task}
        </div>
      ))}
    </>
  );
};