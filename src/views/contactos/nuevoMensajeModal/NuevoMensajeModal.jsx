import { useState } from "react";
import { Modal } from "antd";
import { Formulario } from "./Formulario";
import { useFormEnviarPlantilla } from "../../../hooks/useFormEnviarPlantilla";


export const NuevoMensajeModal = ({open, setOpen}) => {
  const [messageError, setMessageError] = useState(false);
  const {form,
    formValidation,
    setForm,
    isFormValid,
    handleSubmit,
    handleReset,
    onChangeText} = useFormEnviarPlantilla();

  const onClickOk =()=>{
    if (!isFormValid()) {
      setMessageError(true);
      return;
    };
    handleSubmit();
    setMessageError(false);
    setOpen(false);
  };

  const onClickCancel = () => {

    handleReset();
    setMessageError(false);
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onOk={onClickOk}
      onCancel={onClickCancel}
    >
      <Formulario 
        form = {form}
        formValidation = {formValidation}
        onChangeText = {onChangeText}
        messageError={messageError}
      />
    </Modal>
  );
};
