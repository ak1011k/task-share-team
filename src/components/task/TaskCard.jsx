import React, { useState } from "react";
import { TaskCardTitle } from "./TaskCardTitle";
import { TaskCardDeleteButton } from "./button/TaskDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { Tasks } from "./Tasks";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export const TaskCard = ({
  taskCardsList,
  setTaskCardsList,
  taskCard,
  index,
}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: taskCard.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="w-[250px] p-2 m-2 bg-blue-200 rounded-md"
    >
      <div className="flex justify-between items-center mb-2">
        <TaskCardTitle />
        <div {...listeners} className="cursor-move p-2">
          ☰
        </div>
      </div>
      <div>
        <TaskCardDeleteButton
          taskCardsList={taskCardsList}
          taskCard={taskCard}
          setTaskCardsList={setTaskCardsList}
        />
      </div>

      <div className="mt-2">
        <TaskAddInput
          inputText={inputText}
          setInputText={setInputText}
          setTaskList={setTaskList}
          taskList={taskList}
        />
        <Tasks
          inputText={inputText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>
    </div>
  );
};
