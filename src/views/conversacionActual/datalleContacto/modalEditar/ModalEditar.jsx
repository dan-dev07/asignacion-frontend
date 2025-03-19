import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import { Modal } from 'antd';
import { Formulario } from './Formulario';
import { useFormContactos } from '../../../../hooks/useFormContactos';

export const ModalEditar = ({open, setOpen, datosExterno}) => {
  const {telefono} = useParams();
  const [messageError, setMessageError] = useState(false);
  const { form, formValidation, setForm, isFormValid, onChangeText, handleSubmit, handleReset } = useFormContactos();
  
  useEffect(() => {
    setForm({...form, ...datosExterno, telefono});
  }, [datosExterno, telefono]);
  
  const onClickOk =()=>{
    if (!isFormValid()) {
      setMessageError(true);
      return;
    };
    handleSubmit();
    setMessageError(false);
    setOpen(false);
  };

  const onClickCancel =()=>{
    setMessageError(false);
    setOpen(false);
  };

  return (
    <Modal
      title='Editar Contacto'
      open={open}
      onOk={onClickOk}
      onCancel={onClickCancel}
    >
      <Formulario
        form = {form}
        formValidation = {formValidation}
        onChangeText = {onChangeText}
        messageError = {messageError}
      />
    </Modal>
  )
}
