import { createSlice } from '@reduxjs/toolkit';

export const buscarMensajeSlice = createSlice({
  name: 'buscarMensaje',
  initialState: {
    mensajeRef: '',
  },
  reducers: {
    setMensajeRef: (state, { payload }) => {
      state.mensajeRef = payload;
    },
  }
});


// Action creators are generated for each case reducer function
export const { setMensajeRef } = buscarMensajeSlice.actions;
