import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Row } from 'antd';
import { DoubleRightOutlined, SendOutlined } from '@ant-design/icons'
import { SocketContext } from '../../../context/SocketContext';
import InputText from '../../../components/InputText';
import { formatoFecha } from '../../../utils/fecha';
import { CompartirArchivo } from '../Compartir';
import { startGuardarMensajeContext } from '../../../store/slices/mensajes/thunks';
import { ResponderMensaje } from '../modalOpciones/ResponderMensaje';

export const EnviarMensaje = ({}) => {
  const dispatch = useDispatch();
  const { telefono } = useParams();
  const [mensaje, setMensaje] = useState('');
  const { socket } = useContext(SocketContext);
  const { mensajeContext } = useSelector(state => state.mensajesReducer);
  const { user } = useSelector(state => state.userReducer);
  const { mensaje: responderMensaje, mensajeId, filename } = mensajeContext;

  const onChange = ({ target }) => {
    setMensaje(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (mensaje.length === 0) {
      return;
    };

    socket.emit('mensaje-enviado', {
      telefono,
      fecha: formatoFecha(),
      mensaje,
      leido: false,
      emisor: 'Escotel',
      tipo: "text",
      message_id: mensajeId,
      filename,
      user: user.uid,
    });
    setMensaje('');
    dispatch(startGuardarMensajeContext(''));
  };

  return (
    <>
      {responderMensaje && <ResponderMensaje mensaje={responderMensaje} />}
      <Row>
        <Col span={18} >
          <form onSubmit={onSubmit}>
            <InputText
              placeholder={'Mensaje...'}
              value={mensaje}
              onChange={onChange}
            />
          </form>
        </Col>
        <Col span={2}>
          <Button
            onClick={onSubmit}
            icon={<SendOutlined />}
          />
        </Col>
        <Col span={2}>
          <CompartirArchivo />
        </Col>
        <Col span={2}>
          <Button
            onClick={() => messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })}
            className='fixed-button'
          >
            <DoubleRightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  );
};
