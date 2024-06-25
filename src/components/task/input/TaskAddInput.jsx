import React from "react";
import { v4 as uuid } from "uuid";
import { FaCrown } from "react-icons/fa";

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
    //カードを追加する。
    setTaskList([
      ...taskList,
      {
        id: taskId,
        draggableId: `task-${taskId}`,
        text: inputText,
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
          type="text"
          placeholder="add task"
          className="border-black border rounded-md pl-4 "
          onChange={handleChange}
          value={inputText}
        />
      </form>
      <FaCrown className="mt-1 pt-1 ml-[10px]" />
    </div>
  );
};
