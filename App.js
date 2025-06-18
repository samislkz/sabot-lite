import React, { useState } from 'react';
import faqData from './faqData';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const answer = faqData[input.trim()] || 'عذرًا، لم أتمكن من فهم سؤالك.';

    setMessages([...messages, { user: true, text: input }, { user: false, text: answer }]);
    setInput('');
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={msg.user ? 'message user' : 'message bot'}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="اكتب سؤالك هنا..." />
        <button onClick={handleSend}>إرسال</button>
      </div>
    </div>
  );
}

export default App;