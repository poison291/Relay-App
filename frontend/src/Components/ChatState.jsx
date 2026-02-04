import Sidebar from './Sidebar';
import React from "react";
import { useState } from "react";

function ChatState() {
  const [chats, setChats] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);

  const activeChat = chats.find((chat) => chat.id === activeChatId);
  console.log(activeChat);

  // New chat generation function
  function createNewChat() {
    const newChat = {
      id: Date.now(),
      name: "New test Chat",
      message: [],
    };
    alert("Creating New chat");
    setChats((prev) => [...prev, newChat]);
    setActiveChatId(newChat.id);
  }

  return (
    <Sidebar
      chats={chats}
      activeChatId={activeChatId}
      onNewChat={createNewChat}
      onSelectChat={setActiveChatId}
    />
  );
}

export default ChatState;
