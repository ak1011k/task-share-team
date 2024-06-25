import React from "react";
import { Task } from "./Task";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const SortableTask = ({ task, setTaskList, taskList, index }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Task
      task={task}
      setTaskList={setTaskList}
      taskList={taskList}
      index={index}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    />
  );
};

export const Tasks = ({ taskList = [], setTaskList = () => {} }) => {
  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTaskList((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);

        const newItems = [...items];
        const [reorderedItem] = newItems.splice(oldIndex, 1);
        newItems.splice(newIndex, 0, reorderedItem);

        return newItems;
      });
    }
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext
        items={taskList.map((task) => task.id)}
        strategy={verticalListSortingStrategy}
      >
        {taskList.map((task, index) => (
          <SortableTask
            key={task.id}
            task={task}
            taskList={taskList}
            setTaskList={setTaskList}
            index={index}
          />
        ))}
      </SortableContext>
    </DndContext>
  );
};
