import React from "react";
import { FaTimes } from "react-icons/fa";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="pr-1 pt-1 cursor-pointer"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <FaTimes />
      </button>
    </div>
  );
};
