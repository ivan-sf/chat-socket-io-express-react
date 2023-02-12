import { useEffect, useState } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io();
// const socket = io("http://localhost:8080");
function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      body: "",
      from: "",
    },
  ]);
  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message", message);
    const newMessage = {
      body: message,
      from: "Me",
    };
    setMessages([newMessage, ...messages]);
    setMessage("");
  };
  useEffect(() => {
    const receivedMessage = (message) => {
      setMessages([message, ...messages]);
    };
    socket.on("message", receivedMessage);
    return () => {
      socket.on("message", receivedMessage);
    };
  });
  return (
    <div className="h-screen bg-zinc-800 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-zinc-900 p-10">
        <h1>Chat humans</h1>
        <input
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="border-2 border-zinc-500 p-2 text-black"
          autoFocus
        />

        <ul className="h-80 overflow-y-auto">
          {messages.map((message, index) => (
            <li key={index} className={`p-2 my-2 table text-sm rounded-md ${message.from == 'Me' ? 'bg-sky-600 ml-auto' : 'bg-black'}`}>
              <p>
                {message.from}: {message.body}
              </p>
            </li>
          ))}
        </ul>
      </form>

      <div></div>
    </div>
  );
}

export default App;
