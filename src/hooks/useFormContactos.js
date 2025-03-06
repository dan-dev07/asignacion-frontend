import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { formValidationsDatosContacto } from "../utils/formValidations";
import { startActualizarContacto } from "../store/slices/mensajes/thunks";

const initialData = {
  nombre: '',
  apellido: '',
  empresa: '',
  telefono: '',
};

export const useFormContactos = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialData);
  const [formValidation, setFormValidation] = useState();

  useEffect(() => {
    createValidators();
  }, [form]);
  
  const handleSubmit = () => {
    dispatch(startActualizarContacto(form));
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
