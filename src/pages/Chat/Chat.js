import React from 'react'
import LogoSearch from '../../components/LogoSearch/LogoSearch'
import './Chat.css'

const Chat = () => {
  return (
    <div className="Chat">
      {/* Left-side-chat */}
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">Conversationsf</div>
        </div>
      </div>

      {/* Right-side-chat */}
      <div className="Right-side-chat">
        <h2>Chats</h2>
      </div>
    </div>
  )
}

export default Chat
