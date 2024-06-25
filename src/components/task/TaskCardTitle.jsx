import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Date");

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full overflow-hidden">
      {isEditing ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent border-none text-xl font-bold focus:outline-none whitespace-nowrap overflow-x-auto"
          autoFocus
        />
      ) : (
        <h3
          onClick={handleTitleClick}
          className="text-xl font-bold cursor-text whitespace-nowrap overflow-x-auto"
        >
          {title}
        </h3>
      )}
    </div>
  );
};
