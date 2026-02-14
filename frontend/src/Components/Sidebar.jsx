import React from "react";
import { NotebookPen, Settings } from "lucide-react";
// import chatState from "./chatState";

function Sidebar({ chats, activeChatId, onNewChat, onSelectChat }) {
  console.log(activeChatId);
  console.log(onSelectChat);
  console.log(chats);
  
  function onOpenSettings(){}

  return (
    <div className="bg-[#181818] flex flex-col w-64 h-screen p-2">
    
      
      <div className="flex items-center gap-2 hover:bg-[#303030] px-3 py-2 rounded-xl">
        <img className="w-6" src="./d-icon.png" alt="logo" />
      </div>
    
      <button onClick={onNewChat}>
        <div className="flex items-center gap-2 mt-2 px-4 py-2 hover:bg-[#303030] rounded-xl">
          <NotebookPen size={18} />
          <span>New chat</span>
        </div>
      </button>
    
      <p className="mt-4 px-4 text-sm text-gray-400">Your chats</p>
    
     
      <div className="flex-1 min-h-0 overflow-y-auto mt-2 flex flex-col gap-1 chat-scroll">
        {chats.map(chat => (
          <div
            key={chat.id}
            onClick={() => onSelectChat(chat.id)}
            className={`px-4 py-2 rounded-lg text-sm cursor-pointer
              ${
                chat.id === activeChatId
                  ? "bg-[#303030] text-white font-medium"
                  : "text-white hover:bg-[#252525]"
              }`}
          >
            {chat.name}
          </div>
        ))}
      </div>
    
      {/* Bottom Settings */}
      <div className="pt-2">
        <button
          onClick={onOpenSettings}
          className="w-full flex items-center gap-2 px-4 py-2 hover:bg-[#303030] rounded-xl text-gray-400 hover:text-white"
        >
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </div>
    
    </div>
  )
}


export default Sidebar;
