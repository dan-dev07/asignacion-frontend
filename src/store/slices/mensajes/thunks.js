import { fetch, fetchApi } from "../../../api/api";
import { urlBase } from "../../../const/url";
import { creaNotificacion } from "../../../utils/creaNotificacion";
import { setDatosContacto } from "../contacto/contactoSlice";
import { setNotificacion } from "../notificacion/notificiacionSlice";
import { setConversacionActual, setLoading, setMensajeContext, setMensajesAntiguos, setNumerosContacto } from "./mensajesSlice"

export const startObtenerContactos = (contactos)=>{
  return async(dispatch) =>{
    dispatch(setNumerosContacto(contactos.contactos));
  };
};

export const startObtenerContactosApi = ()=>{
  return async(dispatch) =>{
    dispatch(setLoading(true));
    const res = await fetch('get', `${urlBase}/api/Datos/mensajes`);
    if (res.ok) {
      dispatch(setNumerosContacto(res.data));
    }else{
      dispatch(setNotificacion(creaNotificacion('error', res.response.data.response)));
    };
    dispatch(setLoading(false));
  };
};

export const startObtenerConversacion = (telefono, numMensajes, limite) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await fetch('post', `${urlBase}/api/datos/getChat`,{telefono, numMensajes, limite});
    if (res.ok) {
      console.log(res.data.mensajes);
      dispatch(setConversacionActual(res.data.mensajes));
      dispatch(setDatosContacto(res.data.datosExterno));
      dispatch(setNotificacion(creaNotificacion('success', 'Conversación cargada')));
    }else{
      dispatch(setNotificacion(creaNotificacion('error', res.response.data.response)));
    };
    dispatch(setLoading(false));
  };
};

export const startGuardarMensajeContext =(mensaje)=>{
  return async dispatch =>{
      dispatch(setMensajeContext(mensaje));
  };
};

export const startActualizarContacto =(form)=>{
  return async (dispatch) => {
    const res = await fetch('post',`${urlBase}/api/Datos/actualizarContacto`, form );
    if (res.ok) {
      dispatch(setDatosContacto(res.data));
      dispatch(setNotificacion(creaNotificacion('success', 'Actualizado')));
    }else{
      dispatch(setNotificacion(creaNotificacion('error', 'No se actualizaron los datos')));
    }
  };
};

export const startCargarMensajesAntiguos =(telefono, numMensajes, limite)=>{
  return async (dispatch) => {
    const res = await fetch('post', `${urlBase}/api/datos/getChat`,{telefono, numMensajes, limite});
    if (res.ok) {
      dispatch(setMensajesAntiguos(res.data.mensajes));
    }else{
      dispatch(setNotificacion(creaNotificacion('error', res.response.data.response)));
    };
  };
};