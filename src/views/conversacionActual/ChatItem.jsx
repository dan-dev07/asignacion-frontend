import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setMensajeRef } from '../../store/slices/buscarMensaje/buscarMensajeSlice';
import { IncomingMessage } from './mostrarMensajes/IncomingMessage';
import { OutgoingMessage } from './mostrarMensajes/OutgoingMessage';
import { EnviarMensaje } from './enviarMensaje/EnviarMensaje';
import { Button, Spin } from 'antd';
import { fetch } from '../../api/api';
import { urlBase } from '../../const/url';
import { DoubleRightOutlined } from '@ant-design/icons';

export const ChatItem = ({ chats }) => {
  const dispatch = useDispatch();
  const [localChat, setLocalChat] = useState(chats);
  const [pagina, setPagina] = useState(2);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const messageRefs = useRef({});
  const [contenedorRef, setContenedorRef] = useState(null);
  const { telefono } = useParams();
  const { mensajeRecibido } = useSelector(state => state.mensajesReducer);

  useEffect(() => {
    setLocalChat(chats);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (mensajeRecibido && mensajeRecibido.telefono === telefono) {
      const { ultimo } = mensajeRecibido;
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
        behavior: 'smooth',
        block: 'center',
      });
    };
    setTimeout(() => {
      dispatch(setMensajeRef(''));
    }, 2000);
  };

  const mensajesAntiguos = async ()=>{
    setLoading(true);
    const mensajesChatActual = { 
      mensajeFinal: localChat[localChat.length - 1],
      mensajeInicial: localChat[0],
      mensajesTotales: localChat.length,
      pagina
    };
    const res = await fetch('post', `${urlBase}/api/Datos/getChat`, {telefono, mensajesChatActual });
    if (res.ok) {
      setLocalChat(prev => {
        const actChat = [...res.data.mensajes, ...prev];
        return actChat;
      });
    };
    setLoading(false);
    if (res.data.mensajes.length === 10) {
      setPagina(prev => prev + 1);
    };
  };
  
  return (
    <>
      <Button 
        style={{  rotate: '-90deg', width: '10px', marginBottom:'5px'}}
        onClick={mensajesAntiguos}
      >
        <DoubleRightOutlined />
      </Button>
      {loading && <Spin />}
      <div className='chat-messages'
        ref={contenedorRef}
      >
        {localChat && localChat?.map(msg => {
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
