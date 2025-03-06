import {configureStore} from '@reduxjs/toolkit';
import { userSlice } from './slices/auth/userSlice';
import { mensajesSlice } from './slices/mensajes/mensajesSlice';
import { usuariosSlice } from './slices/usuarios/usuariosSlice';
import { notificacionSlice } from './slices/notificacion/notificiacionSlice';
import { buscarMensajeSlice } from './slices/buscarMensaje/buscarMensajeSlice';
import { modalSlice } from './slices/modal/modalSlice';
import { filtroSlice } from './slices/filtroTexto/filtroSlice';
import { contactoSlice } from './slices/contacto/contactoSlice';

export const store = configureStore({
  reducer:{
    userReducer: userSlice.reducer,
    mensajesReducer: mensajesSlice.reducer,
    notificacionReducer: notificacionSlice.reducer,
    usuariosReducer: usuariosSlice.reducer,
    mensajeRefReducer:buscarMensajeSlice.reducer,
    modalReducer:modalSlice.reducer,
    filtroReducer:filtroSlice.reducer,
    contactoReducer:contactoSlice.reducer
  }
});