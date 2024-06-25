import React, { forwardRef } from "react";
import { FaTrashAlt } from "react-icons/fa";

export const Task = forwardRef(
  ({ task, setTaskList, taskList, style, ...props }, ref) => {
    const handleDelete = (id) => {
      setTaskList(taskList.filter((task) => task.id !== id));
    };

    return (
      <div
        ref={ref}
        style={style}
        className="flex items-center justify-between p-[17px] bg-white mt-[10px] rounded-md shadow-[1px,1px,1px,rgb(75,75,75)]"
        {...props}
      >
        <p className="ml-[12px] break-words overflow-wrap-anywhere max-w-[80%] whitespace-normal">
          {task.text}
        </p>
        <button
          className="ml-[9px] cursor-pointer flex-shrink-0"
          onClick={() => handleDelete(task.id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    );
  }
);

Task.displayName = "Task";
