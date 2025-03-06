import React, { useEffect, useRef, useState } from 'react'
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';

export const MostrarMensajes = ({ chats, messagesEndRef }) => {
  const messageRefs = useRef({});
  const handleMessageClick = (messageId) => {
    if (messageRefs.current[messageId]) {
      messageRefs.actual = messageId;
      messageRefs.current[messageId].scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    };
  };

  useEffect(() => {
    messageRefs.current.scrollIntoView({ behavior: 'smooth' });
  }, [chats]);

  return (
    <>
      {chats?.map(msg => {
        const messageId = msg._id;
        return (
          <div
            className={`message ${msg.emisor} `}
            key={messageId}
            ref={m => messageRefs.current[messageId] = m}
          >
            {msg.emisor === 'Paciente'
              ? (<IncomingMessage mensaje={msg} key={messageId} handleClick={handleMessageClick} />)
              : (<OutgoingMessage mensaje={msg} key={messageId} handleClick={handleMessageClick} />)}
          </div>
        )
      })}
      <div ref={messageRefs} />
    </>
  )
}
