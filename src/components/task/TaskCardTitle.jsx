import React, { useState } from "react";

export const TaskCardTitle = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("なまえ");

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleBlur = () => {
    setIsEditing(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="w-full overflow-hidden">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="なまえをにゅうりょく"
            value={title}
            onChange={handleTitleChange}
            onBlur={handleTitleBlur}
            maxLength="15"
            className="w-full bg-transparent border-none text-xl font-bold focus:outline-none whitespace-nowrap overflow-x-auto"
            autoFocus
          />
        </form>
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
