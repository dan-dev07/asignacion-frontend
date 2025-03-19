import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formValidationsDatosContacto } from "../utils/formValidations";
import { SocketContext } from "../context/SocketContext";
import { setNotificacion } from "../store/slices/notificacion/notificiacionSlice";
import { creaNotificacion } from "../utils/creaNotificacion";


const initialData = {
  nombre: '',
  apellido: '',
  empresa: '',
  telefono: '',
};

export const useFormEnviarPlantilla = () => {
  const dispatch = useDispatch();
  const {socket} = useContext(SocketContext)
  const [form, setForm] = useState(initialData);
  const [formValidation, setFormValidation] = useState();

  useEffect(() => {
    createValidators();
  }, [form]);
  
  const handleSubmit = () => {
    socket.emit('enviar-template', {
      telefono:52 + form.telefono,
      apellido: form.apellido,
      empresa:form.empresa,
      nombre:form.nombre,
    }, (res)=>{
      if (res.ok) {
        dispatch(setNotificacion(creaNotificacion('success', 'Mensaje Inicial envido')));
      } else {
        dispatch(setNotificacion(creaNotificacion('error', 'Mensaje no enviado')));
      };
    });
  };

  const handleReset = () => {
    setForm(initialData);
    setFormValidation(null);
  };

  const onChangeText = ({ target }) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const createValidators = () => {
    const formCheckedValues = {};
    for (const formField of Object.keys(formValidationsDatosContacto)) {
      const [fn, errorMessage] = formValidationsDatosContacto[formField];
      formCheckedValues[`${formField}Valid`] = fn(form[formField]) ? null : errorMessage;
    };
    setFormValidation(formCheckedValues);
  };
  const isFormValid = () => {
    for (const formValue of Object.keys(formValidation)) {
      if (formValidation[formValue] !== null) return false;
    };
    return true;
  };

  return {
    form,
    formValidation,
    setForm,
    isFormValid,
    handleSubmit,
    handleReset,
    onChangeText,
  }
}
