import React from 'react'

const TheirMessage = ({ lastMessage, message }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username != message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div 
          className="message-avatar"
          style={{ backgrounImage: `url(${message?.sender?.avatar})`}}
        />
      )}
    </div>
  )
}

export default TheirMessage