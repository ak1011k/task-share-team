import React, { useState } from "react";
import { TaskCard } from "./TaskCard";
import { AddTaskButton } from "./button/AddTaskButton";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    { id: "0", draggableId: "item0" },
  ]);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTaskCardsList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={taskCardsList.map((card) => card.id)}
        strategy={horizontalListSortingStrategy}
      >
        <div className="flex justify-start items-start flex-wrap">
          {taskCardsList.map((taskCard, index) => (
            <TaskCard
              key={taskCard.id}
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
              index={index}
            />
          ))}
          <AddTaskButton
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
          />
        </div>
      </SortableContext>
    </DndContext>
  );
};
