import { useSelector } from "react-redux";
import { ModalActualizar } from "./modalActualizar/ModalActualizar";

export const UsuariosModal = () => {
  const {usuario} = useSelector(state => state.usuariosReducer);
  const {open} = useSelector(state => state.modalReducer);
  return (
    <ModalActualizar open={open} usuario={usuario}/>
  );
};
