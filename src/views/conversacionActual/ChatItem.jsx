import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setMensajeRef } from '../../store/slices/buscarMensaje/buscarMensajeSlice';
import { IncomingMessage } from './mostrarMensajes/IncomingMessage';
import { OutgoingMessage } from './mostrarMensajes/OutgoingMessage';
import { EnviarMensaje } from './enviarMensaje/EnviarMensaje';

export const ChatItem = ({chats}) => {
  const dispatch = useDispatch();
  const [localChat, setLocalChat] = useState(chats);
  const messagesEndRef = useRef(null);
  const messageRefs = useRef({});
  const {telefono} = useParams();
  const {mensajeRecibido} = useSelector(state => state.mensajesReducer);

  useEffect(() => {
    setLocalChat(chats);
  }, [chats]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [localChat]);

  useEffect(() => {
    if (mensajeRecibido && mensajeRecibido.telefono === telefono) {
      const {ultimo} = mensajeRecibido;
      setLocalChat(prevState => {
        const nuevoState = [...prevState, ultimo];
        return nuevoState;
      });
    };
  }, [mensajeRecibido]);
  
  const handleMessageClick = (messageId) => {
    dispatch(setMensajeRef(messageId));
    if (messageRefs.current[messageId]) {
      messageRefs.actual = messageId;
      messageRefs.current[messageId].scrollIntoView({
        behavior:'smooth',
        block:'center',
      });
    };
    setTimeout(() => {
      dispatch(setMensajeRef(''));
    }, 2000);
  };
  
  return (
    <>
      <div className='chat-messages'>
        { localChat && localChat?.map(msg => {
          const messageId = msg._id;
          return (
            <div
              className={`message ${msg.emisor}`}
              key={messageId}
              ref={m => messageRefs.current[messageId] = m}
            >
              {msg.emisor === 'Externo'
                ? (<IncomingMessage mensaje={msg} key={messageId} handleClick={handleMessageClick} />)
                : (<OutgoingMessage mensaje={msg} key={messageId} handleClick={handleMessageClick} />)}
            </div>
          )
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input">
        <EnviarMensaje messagesEndRef={messagesEndRef} />
      </div>
    </>
  );
};
