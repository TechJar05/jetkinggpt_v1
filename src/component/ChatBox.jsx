import React, { useState, useEffect, useRef } from "react";

export default function ChatBox() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      type: "system",
      content:
        "Hello! I'm your AI assistant. Ask me to search for contracts or documents in the database.",
      timestamp: new Date().toISOString(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      type: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    setTimeout(() => {
      processUserQuery(userMessage.content);
      setIsLoading(false);
    }, 1000);
  };

  const processUserQuery = (query) => {
    const lowerQuery = query.toLowerCase();
    let responseMessage = {
      id: Date.now().toString(),
      type: "bot",
      content:
        "I can help you find contracts or documents in our database. Try asking me to 'find contracts' or 'upload a document'.",
      timestamp: new Date().toISOString(),
    };

    if (
      lowerQuery.includes("find contract") ||
      lowerQuery.includes("search contract")
    ) {
      responseMessage.content =
        "I found the following contracts in the database:";
    }

    setMessages((prev) => [...prev, responseMessage]);
  };

  return (
    <div className="flex items-center justify-center h-[89vh] bg-[#F0EAD6] overflow-hidden">
      <div className="flex flex-col h-[84vh] w-full max-w-2xl bg-[#f2f2f2] rounded-lg shadow-lg p-4  ">


        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-hide pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-md h-auto w-fit ${
                  message.type === "user"
                    ? "bg-[#029c6d] text-[#f2f2f2] rounded-br-none"
                    : "bg-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                <p>{message.content}</p>
                <p className="text-xs text-right text-[#f2f2f2  ] mt-1">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="flex items-center gap-2 border-t pt-4">
          <input
            type="text"
            placeholder="Type your message here..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="flex-1 border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none"
          />
          <button
            className="text-white px-3 py-2 rounded-full bg-[#002366]"
            onClick={handleSendMessage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
