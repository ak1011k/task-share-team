import React from "react";
import { Date } from "./Date";

export const Header = () => {
  return (
    <div>
      <header className="flex items-center justify-center bg-white p-3">
        <h1 className="text-lg font-bold text-gray-600 drop-shadow-lg mr-3">
          Team Tasks
        </h1>
        <img
          src="src/images/note.png"
          alt="ノート"
          className="w-[30px] h-[40px]"
        ></img>
      </header>
    </div>
  );
};
