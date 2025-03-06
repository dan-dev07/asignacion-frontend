import { useEffect, useState } from "react";

export const useFormEditarUsuario = (usuario) => {
  const [form, setForm] = useState(usuario);

  useEffect(() => {
    setForm(usuario);
  }, [usuario]);
  
  const onChangeText = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const onChangeChecked = (value, name) => {
    setForm({ ...form, [name]: value });
  };
  const onChangeVal = (value, name) => {
    setForm({ ...form, [name]: value });
  };

  const handleReset =()=>{
    setForm(usuario);
  };

  return {
    //info
    form,

    //funciones
    onChangeText,
    onChangeChecked,
    onChangeVal,
    handleReset
  }
}
