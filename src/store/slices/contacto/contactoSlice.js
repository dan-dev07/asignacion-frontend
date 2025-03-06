import { createSlice } from '@reduxjs/toolkit';

export const contactoSlice = createSlice({
    name: 'contacto',
    initialState: {
      datosContacto:null,
      loading:false
    },
    reducers: {
      setDatosContacto:(state, {payload}) => {
        state.datosContacto = payload;
      },
    }
});


// Action creators are generated for each case reducer function
export const { setDatosContacto } = contactoSlice.actions;
