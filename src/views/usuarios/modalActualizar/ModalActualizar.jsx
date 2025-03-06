import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { useFormEditarUsuario } from './useFormEditarUsuario';
import { Formulario } from './Formulario';
import { isFormValid, validarFormulario } from '../../../utils/validarForm';
import { formValidationsUsuarios } from '../../../utils/formValidations';
import { setModal } from '../../../store/slices/modal/modalSlice';
import { startActualizarUsuario } from '../../../store/slices/usuarios/thunks';

export const ModalActualizar = ({ open, usuario}) => {
  const dispatch = useDispatch();
  const [messageError, setMessageError] = useState(false);
  const [formValidation, setFormValidation] = useState({});
  const { form, onChangeChecked, onChangeText, onChangeVal, handleReset } = useFormEditarUsuario(usuario);

  const handleSubmit = async () => {
    dispatch(startActualizarUsuario(form)); 
  };

  const handleOk = () => {
    const validaciones = validarFormulario(form, formValidationsUsuarios);
    const isValid = isFormValid(validaciones);
    if (!isValid) {
      setFormValidation(validaciones);
      setMessageError(true);
      return;
    };
    setMessageError(false);
    handleSubmit();
    handleReset();
    dispatch(setModal(false));
  };

  const handleCancel = () => {
    handleReset();
    setMessageError(false);
    dispatch(setModal(false));
  }; 

  return (
    <>
      <Modal
        title="Editar usuario"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formulario form={form}
          onChangeText={onChangeText}
          onChangeVal={onChangeVal}
          onChangeChecked={onChangeChecked}
          formValidation={formValidation}
          messageError={messageError}
        />
      </Modal>
    </>
  );
};