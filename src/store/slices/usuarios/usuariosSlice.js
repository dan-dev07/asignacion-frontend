import { createSlice } from '@reduxjs/toolkit';

export const usuariosSlice = createSlice({
  name: 'usuarios',
  initialState: {
    opcionesUsuario:[],
    usuarios:[],
    usuario:{}
  },
  reducers: {
    setUsuarios:(state, {payload})=>{
      state.usuarios = payload;
    },
    setUsuario:(state, {payload})=>{
      state.usuario = payload;
    },
    setOpcionesUsuario:(state, {payload})=>{
      state.opcionesUsuario = payload;
    }
  },
});


// Action creators are generated for each case reducer function
export const { setUsuarios, setUsuario, setOpcionesUsuario } = usuariosSlice.actions;
