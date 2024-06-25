import React from "react";
import { FaTimesCircle } from "react-icons/fa";

export const TaskCardDeleteButton = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
}) => {
  const taskCardDeleteButton = (id) => {
    /* タスクカードを削除する */
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  };
  return (
    <div>
      <button
        className="pr-1 pt-1 cursor-pointer"
        onClick={() => taskCardDeleteButton(taskCard.id)}
      >
        <FaTimesCircle />
      </button>
    </div>
  );
};
