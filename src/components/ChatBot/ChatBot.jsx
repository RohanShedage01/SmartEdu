import React from 'react'
import './ChatBot.css'

function ChatBot({ messages, inputValue, onInputChange, onSend }) {
  return (
    <div className="assistant-card chat-card">
      <h2>SmartEdu Chat Bot</h2>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            <span>{message.text}</span>
          </div>
        ))}
      </div>
      <form className="chat-input" onSubmit={onSend}>
        <input
          type="text"
          value={inputValue}
          placeholder="Ask your study assistant..."
          onChange={onInputChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ChatBot
