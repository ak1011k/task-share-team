import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { FaTrashAlt } from "react-icons/fa";

export const Task = ({ task, taskList, setTaskList, index }) => {
  const handleDelete = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };
  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided) => (
        <div
          className="flex items-center justify-between p-[17px] bg-white mt-[10px] rounded-md shadow-[1px,1px,1px,rgb(75,75,75)] border border-gray-500"
          key={task.id}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
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
      )}
    </Draggable>
  );
};
