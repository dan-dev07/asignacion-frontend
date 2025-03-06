import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Button, Modal, Row } from 'antd';
import { startGuardarMensajeContext } from '../../../store/slices/mensajes/thunks';
import { ModalReenviar } from './modalReenviar/ModalReenviar';

export const ModalOpciones = ({ mensaje, setOpen }) => {
  const dispatch = useDispatch();
  const [openModalReenviar, setOpenModalReenviar] = useState(false);

  const guardarMensaje =()=>{
    dispatch(startGuardarMensajeContext(mensaje));
    setOpen(false);
  };
 
  const onClickReenviar = () => {

    setOpen(false);
    setOpenModalReenviar(true);
  };
  
  return (
    <Row>
      <Button onClick={() => guardarMensaje()}>
        Responder
      </Button>
      <Button onClick={onClickReenviar}>
        Reenviar
      </Button>
      <Button onClick={() => console.log('Fijar')}>
        Fijar
      </Button>
      <ModalReenviar open={openModalReenviar} setOpen={setOpenModalReenviar}/>
    </Row>

  )
}
