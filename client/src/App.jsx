import React, { useState, useEffect } from "react";
import "./App.css";

import io from "socket.io-client";
import { nanoid } from "nanoid";
//  no dotenv
const socket = io("http://localhost:5000");

const userName = nanoid(4);

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  }, [chat]);

  return (
    <>
      <h1>Chatty App</h1>

      <form onSubmit={sendChat}>
        <input
          type="text"
          name="chat"
          placeholder="Send msg"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button type="submit">Send</button>
      </form>
      {chat.map((payload, index) => {
        return (
          <p key={index}>
            {payload.message} - <span>id : {payload.userName}</span>
          </p>
        );
      })}
    </>
  );
}

export default App;
