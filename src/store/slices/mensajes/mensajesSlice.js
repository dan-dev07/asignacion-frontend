import { createSlice } from '@reduxjs/toolkit';

export const mensajesSlice = createSlice({
    name: 'mensajes',
    initialState: {
      mensajeContext:{},
      mensajeRecibido:null,
      mensajeEnviado:null,
      numerosContacto:[],
      chats:[],
      loading:false,
    },
    reducers: {
      setNumerosContacto: (state, {payload}) => {
        state.numerosContacto = payload;
      },
      setGuardarMensajeEnviado:(state, {payload}) => {
        state.mensajeEnviado = payload;
      },
      setMensajeContext:(state, {payload})=>{
        state.mensajeContext = payload;
      },
      setNuevoMensajeRecibido:(state, {payload}) => {
        state.mensajeRecibido = payload;
      },
      setConversacionActual:(state, {payload}) => {
        state.chats = payload;
      },
      setLoading:(state, {payload}) => {
        state.loading = payload;
      },
      setMensajesAntiguos:(state, {payload}) => {
        state.chats = [...payload, ...state.chats ];
      },
    }
});


// Action creators are generated for each case reducer function
export const { setNumerosContacto, setGuardarMensajeEnviado, setMensajes, setMensajeContext, setNuevoMensajeRecibido, setConversacionActual, setLoading, setMensajesAntiguos } = mensajesSlice.actions;
