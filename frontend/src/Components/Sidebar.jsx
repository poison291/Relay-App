import React from "react";
import { NotebookPen } from "lucide-react";

function Sidebar() {
  return (
    <div className="bg-[#181818] flex flex-col w-64 min-h-screen p-2">
      
      <div className="flex items-center gap-2 hover:bg-[#303030] text-white transition-colors px-4 py-2 rounded-xl cursor-pointer">
        <img className="w-8" src="./d-icon.png" />
        <h1 className="text-xl font-medium text-white">Relay</h1>
      </div>
      <div
        className="flex items-center gap-2 mt-2 px-4 py-2 transition-colors
              cursor-pointer hover:bg-[#303030] text-white rounded-xl"
      >
        <NotebookPen size={18} />
        <span className="text-white text-md">New chat</span>
      </div>
      <div className="flex items-center gap-2 mt-2 px-4 py-2 transition-colors
            cursor-pointer rounded-xl">
        <p className="text-sm text-gray-400 hover:text-gray-300 transition-colors">Your chats </p>
      </div>
    </div>
  );
}

export default Sidebar;
