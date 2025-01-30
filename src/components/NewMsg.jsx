import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Backend server ka URL

const NewMsg = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [currentChatUserId, setCurrentChatUserId] = useState(null);

    // Backend se messages receive karne ke liye useEffect
    useEffect(() => {
        socket.on("receiveMessage", (message) => {
            setMessages((prevMessages) => [...prevMessages, message]);
        });

        return () => {
            socket.off("receiveMessage");
        };
    }, []);

    const sendMessage = () => {
        if (newMessage.trim() === "") return;

        const messageData = {
            id: Date.now(),
            text: newMessage,
            sender: true,
            chatWith: currentChatUserId,
        };

        // Backend ko message bhejo
        socket.emit("sendMessage", messageData);

        // Apni taraf se bhi update karo (taaki turant dikhe)
        setMessages([...messages, messageData]);
        setNewMessage("");
    };

    return (
        <div className="h-screen flex">
            {/* Left Chat Section */}
            <div className="flex-1 flex flex-col">
                {/* Messages */}
                <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex ${
                                message.sender ? "justify-end" : "justify-start"
                            }`}
                        >
                            <div
                                className={`p-3 rounded-lg shadow-sm ${
                                    message.sender ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
                                } max-w-xs`}
                            >
                                <p>{message.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="p-4 border-t flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewMsg;
