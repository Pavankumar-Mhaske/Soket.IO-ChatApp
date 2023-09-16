import React, { useState, useEffect } from "react";
import "./App.css";

import io from "socket.io-client";
import { nanoid } from "nanoid";
//  no dotenv
const socket = io("http://localhost:5000");

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  return (
    <>
      <h1>Chatty App</h1>
      <form action="">
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
    </>
  );
}

export default App;
