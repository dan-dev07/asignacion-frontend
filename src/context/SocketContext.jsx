import React, { createContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSocket } from '../hooks/useSockets';
import { startObtenerContactos } from '../store/slices/mensajes/thunks';
import { urlBase } from '../const/url';
import { setNuevoMensajeRecibido } from '../store/slices/mensajes/mensajesSlice';
import { setNotificacion } from '../store/slices/notificacion/notificiacionSlice';
import { creaNotificacion } from '../utils/creaNotificacion';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
  const dispatch = useDispatch();
  const { logged } = useSelector(state => state.userReducer);
  const { online, socket, conectarSocket, desconectarSocket } = useSocket(urlBase);

  useEffect(() => {
    if (logged === 'logged') {
      conectarSocket();
    };
  }, [logged, conectarSocket]);

  useEffect(() => {
    if (logged === 'not logged') {
      desconectarSocket();
    }
  }, [logged, desconectarSocket]);

  useEffect(() => {
    socket?.on('todos-los-contactos', (contactos) => {
      dispatch(startObtenerContactos(contactos));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('archivo-enviado', data => {
      if (!data.error) {
        dispatch(setNuevoMensajeRecibido(data));
      }
      setNotificacion(creaNotificacion('error','No se envió el archivo'));
    });
  }, [socket, dispatch]);

  useEffect(() => {
    socket?.on('mensaje-recibido', (data) => {
      dispatch(setNuevoMensajeRecibido(data));
    });
  }, [socket, dispatch]);

  return (
    <SocketContext.Provider value={{ socket, online }} >
      {children}
    </SocketContext.Provider>
  );
};