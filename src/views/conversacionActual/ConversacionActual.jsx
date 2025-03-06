import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { startObtenerConversacion } from '../../store/slices/mensajes/thunks';
import { Spin } from 'antd';
import { ChatItem } from './ChatItem';
import { DetalleContacto } from './datalleContacto/DetalleContacto';

export const ConversacionActual = () => {
  const dispatch = useDispatch();
  const {telefono} = useParams();
  const {chats, loading } = useSelector(state => state.mensajesReducer);
  
  useEffect(() => {
    dispatch(startObtenerConversacion(telefono));
  }, []);

  if (loading) return <div style={{display:'flex', justifyContent:'center'}}><Spin /></div>

  return (
    <div className='fondo' style={{ display: 'flex', justifyContent: 'center' }}>
      <div className="chat-container">
        <div className="chat-header">
          <DetalleContacto telefono={telefono} />
        </div>
        <ChatItem chats={chats}/>
      </div>
    </div >
  );
};