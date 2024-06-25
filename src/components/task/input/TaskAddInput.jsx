import React from "react";
import { v4 as uuid } from "uuid";

export const TaskAddInput = ({
  inputText,
  setInputText,
  setTaskList,
  taskList,
}) => {
  const handleSubmit = (e) => {
    const taskId = uuid();
    e.preventDefault();
    if (inputText === "") {
      return;
    }

    setTaskList([
      ...taskList,
      {
        text: inputText,
        id: taskId,
        draggableId: `task-${taskId}`,
      },
    ]);
    setInputText("");
  };
  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-[100%] text-[1.3rem] p-2 rounded-md border-none outline-none"
          type="text"
          placeholder="add task"
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  );
};
