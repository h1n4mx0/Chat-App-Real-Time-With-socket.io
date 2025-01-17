"use client";
import ChatForm from "@/components/ChatForm";
import ChatMessage from "@/components/ChatMessage";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [room, setRoom] = useState("");
  const [joined, setJoined] = useState(false);
  const [messages, setMessages] = useState<
    { sender: string; message: string}[]
  >([]);
  const [userName, setUserName] = useState("");
  const handleSendMessage = (message: string) => {
    console.log(message);
  }
  return (
    <div className="flex mt-24 justify-center w-full">
      <div className="w-full max-w-3xl mx-auto">
        <h1 className="mb-4 text-2xl font-bold">Room: 1</h1>
        <div className="h-[500px] overflow-y-auto p-4 mb-4 bg-gray-200 border2 rounded-lg">
          {messages.map((msg, index) => (
            <ChatMessage
              key={index}
              sender={msg.sender}
              message={msg.message}
              isOwnMessage={msg.sender === userName}
            />
          ))}
        </div>
        <ChatForm onSendMessage={handleSendMessage}/>
      </div>
    </div>
  );
}
