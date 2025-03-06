import React, { useState } from 'react'

const initialData =[
  {
    mensaje:'',
    telefono:'',
    uid:''
  },
];

export const useFormReenviar = () => {
  const [form, setForm] = useState();

  const onChangeCheck = () => {

  };

  const handleSubmit = () => {

  };

  const handleCancel = () => {

  };

  const handleReset = () => {
    
  };

  return {
    form,
    onChangeCheck,
    handleCancel,
    handleReset,
    handleSubmit
  };
};
