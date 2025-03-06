import { useEffect, useState } from 'react';
import {useParams} from 'react-router';
import {useSelector} from 'react-redux';
import { Modal } from 'antd';
import { Formulario } from './Formulario';
import { useFormContactos } from '../../../../hooks/useFormContactos';

export const ModalAgregar = ({open, setOpen, datosExterno}) => {
  const {telefono} = useParams();
  const [messageError, setMessageError] = useState(false);
  const { form, formValidation, setForm, isFormValid, onChangeText, handleSubmit, handleReset } = useFormContactos();
  
  useEffect(() => {
    let tel = '';
    if (telefono.startsWith('52')) {
      tel = telefono.slice(2);
    };
    setForm({...form, ...datosExterno, telefono:tel});
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
      title='Agregar Contacto'
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
