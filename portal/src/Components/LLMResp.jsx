import React, { useState, useRef, useEffect } from "react";
import { SendHorizontal, Paperclip } from "lucide-react";

function MessageBox({ activeChat }) {
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [message]);
  
  console.log("You Type:", message);

  if (!activeChat) {
    return (
      <div className="flex items-center justify-center h-full text-zinc-500">
        Select or create a chat
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0f0f0f] text-white">

      {/* Chat Empty State */}
      <div className="flex-1 flex items-center justify-center">
        <h1 className="text-3xl font-semibold text-zinc-200">
          How can I help?
        </h1>
      </div>

      {/* Floating Input */}
      <div className="w-full px-4 pb-6">
        <div className="max-w-3xl mx-auto bg-[#1c1c1c] border border-white/10 rounded-3xl shadow-xl px-4 py-3 flex items-end gap-3 focus-within:border-white/20 transition-all">

          {/* Attachment */}
          <button className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition">
            <Paperclip size={18} />
          </button>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 resize-none bg-transparent outline-none text-sm placeholder:text-zinc-500 max-h-40"
          />

          {/* Send Button */}
          <button
            disabled={!message.trim()}
            className={`p-2 rounded-full transition ${
              message.trim()
                ? "bg-white text-black hover:bg-zinc-200"
                : "bg-zinc-800 text-zinc-600 cursor-not-allowed"
            }`}
          >
            <SendHorizontal size={18} />
          </button>

        </div>
      </div>
    </div>
  );
}

export default MessageBox;
