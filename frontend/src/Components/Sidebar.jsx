import React from "react";
import { NotebookPen } from "lucide-react";
// import chatState from "./chatState";

function Sidebar({ chats, activeChatId, onNewChat, onSelectChat }) {
  console.log(activeChatId);
  console.log(onSelectChat);
  console.log(chats);

  return (
    <div className="bg-[#181818] flex flex-col w-64 min-h-screen p-2">

      <div className="flex items-center gap-2 hover:bg-[#303030] px-3 py-2 rounded-xl">
        <img className="w-6" src="./d-icon.png" />
      </div>

      <button onClick={onNewChat}>
        <div className="flex items-center gap-2 mt-2 px-4 py-2 hover:bg-[#303030] rounded-xl">
          <NotebookPen size={18} />
          <span>New chat</span>
        </div>
      </button>

      <p className="mt-4 px-4 text-sm text-gray-400">Your chats</p>

      <div className="mt-2 flex flex-col gap-1">
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer
              ${
                chat.id === activeChatId
                  ? "bg-[#303030] text-white font-medium shadow-fuchsia-100"
                  : "text-gray-400 hover:bg-[#252525]"
              }`}
          >
            {chat.name}
          </div>
        ))}
      </div>
    </div>
  )
}


export default Sidebar;
