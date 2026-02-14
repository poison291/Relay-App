import Sidebar from "./Sidebar";
import React from "react";
import { useState } from "react";
import MessageBox from "./LLMResp";

function ChatState() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const activeChat = chats.find((chat) => chat.id === activeChatId);
  console.log("chat Id",activeChat);

  // New chat generation function
  function createNewChat() {
    const newChat = {
      id: Date.now(),
      name: "New test Chat",
      message: [],
    };
    setChats((prev) => [...prev, newChat]);
    setActiveChatId(newChat.id);
  }

  return (
    <div className="flex">
      <Sidebar
        chats={chats}
        activeChatId={activeChatId}
        onNewChat={createNewChat}
        onSelectChat={setActiveChatId}
      />

      <div className="flex-1 bg-[#0f0f0f] text-white p-6">
        {activeChat ? (
          <MessageBox activeChat={activeChat}/>
        ) : (
          <div className="">
              <h1 className="text-white font-semibold text-3xl text-center mt-10">Where should we start?</h1>
            </div>
        )}
      </div>
    </div>
  );
}

export default ChatState;
