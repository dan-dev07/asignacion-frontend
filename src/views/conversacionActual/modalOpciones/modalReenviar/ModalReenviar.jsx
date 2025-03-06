import { Modal } from "antd"
import { useSelector } from "react-redux";
import { Formulario } from "./Formulario";


export const ModalReenviar = ({open, setOpen}) => {
  const {misMensajes} = useSelector(state => state.mensajesReducer);
  const onClicOk = () => {

    setOpen(false);
  }

  const onClickCancel =()=>{
    setOpen(false);
  };

  return (
    <Modal 
      title='Enviar mensaje a...'
      open={open}
      onCancel={onClickCancel}
      onOk={onClicOk}
      onClose={onClickCancel}
    >
      <Formulario />
    </Modal>
  )
}
