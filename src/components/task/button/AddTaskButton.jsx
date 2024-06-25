import React from "react";
import { v4 as uuid } from "uuid";

export const AddTaskCardButton = ({ taskCardsList, setTaskCardsList }) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    /* タスクカードを追加する。 */
    setTaskCardsList([
      ...taskCardsList,
      {
        id: taskCardId,
        draggableId: `item${taskCardId}`,
      },
    ]);
  };
  return (
    <div className="ml-[1%] mt-[25px]">
      <button
        className="w-[50px] h-[50px] ml-1 rounded-[9999px] text-[30px] bg-white shadow-lg cursor-pointer hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all "
        onClick={addTaskCard}
      >
        +
      </button>
    </div>
  );
};
