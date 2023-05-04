import Image from 'next/image';
import io from 'socket.io-client';
import style from './styles/Home.module.css';
import { handleClientScriptLoad } from 'next/script';
import { useState } from 'react';

const socket = io('http://localhost:5001');

export default function Home() {
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    // サーバーへの送信
    socket.emit('send_message', { message: message });
    setMessage("");
  };

  return (
    <div className={style.container}>
      <h2>Chat App</h2>
      <div className={style.chatInputButton}>
        <input
          type="text"
          placeholder="Enter message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button onClick={() => handleSendMessage()}>Send</button>
      </div>
    </div>
  );
}
