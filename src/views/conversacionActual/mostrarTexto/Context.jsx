import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Card } from "antd";

export const Context = ({ mensaje, handleClick }) => {
  const { context } = mensaje;
  const [mensajeContext, setMensajeContext] = useState({});
  const { chats } = useSelector(state => state.mensajesReducer);

  const buscarMensaje = () => {
    const msg = chats.find(t => t.mensajeId === context?.message_id || t.mensajeId === context?.id);
    return msg;
  };

  useEffect(() => {
    const msg = buscarMensaje();
    setMensajeContext(msg);
  }, [mensaje]);

  if (mensajeContext?.tipo === 'video')
    return (
    <Card title={`${mensajeContext?.emisor}`}
      onClick={()=>handleClick(mensajeContext._id)}
      style={{marginBottom:5, cursor: 'pointer'}}
    >
      <span>{mensajeContext?.mensaje}</span>
    </Card>);

  if (mensajeContext?.tipo === 'document')
    return (
    <Card title={`${mensajeContext?.emisor}`}
      onClick={()=>handleClick(mensajeContext._id)}
      style={{marginBottom:5, cursor: 'pointer'}}
    >
      <span>{mensajeContext?.filename}</span>
    </Card>);

  if (mensajeContext?.tipo === 'image')
    return (
    <Card title={`${mensajeContext?.emisor}`}
      onClick={()=>handleClick(mensajeContext._id)}
      style={{marginBottom:5, cursor: 'pointer'}}
    >
      <p>{mensajeContext?.mensaje}</p>
    </Card>)
  if (mensajeContext?.tipo === 'audio') 
    return (
      <Card title={`${mensajeContext?.emisor}`} 
      onClick={()=>handleClick(mensajeContext._id)}
      style={{marginBottom:5, cursor: 'pointer'}}
    >
      <p>{mensajeContext?.mensaje}</p>
    </Card>);
  if (mensajeContext?.tipo === 'text')
  return (
    <Card title={`${mensajeContext?.emisor}`} 
      onClick={()=>handleClick(mensajeContext._id)}
      style={{marginBottom:5, cursor: 'pointer'}}
    >
      <p>{mensajeContext?.mensaje}</p>
    </Card>);
};
