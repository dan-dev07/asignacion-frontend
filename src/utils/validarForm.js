export const validarFormulario = (dataInput, formValidations)=>{
  const formCheckedValues = {};
  
  for (const formField of Object.keys( formValidations )) {
    const [ fn, errorMessage ] = formValidations[formField];

    formCheckedValues[`${ formField }Valid`] = fn( dataInput[formField] ) ? null : errorMessage;
  };
  return formCheckedValues;
  // return( formCheckedValues );
};

export const isFormValid = (formValidation) => {
  for (const formValue of Object.keys( formValidation )) {
      if ( formValidation[formValue] !== null ) return false;
  };
  return true;
};
