import { fetch } from "../../../api/api";
import { urlBase } from "../../../const/url";
import { creaNotificacion } from "../../../utils/creaNotificacion";
import { setNotificacion } from "../notificacion/notificiacionSlice";
import { setOpcionesUsuario, setUsuarios } from "./usuariosSlice"

export const startSetUsuarios = () => {
  return async (dispatch) => {
    const resp = await fetch('GET', `${urlBase}/api/Usuarios`);
    if (resp.ok) {
      dispatch(setUsuarios(resp.data));
    } else {
      dispatch(setNotificacion(creaNotificacion('error', 'Error al cargar los usuarios')));
    };
  };
};

export const startAgregarUsuario = (form) => {
  return async (dispatch) => {
    const resp = await fetch('POST', `${urlBase}/api/Usuarios/Agregar`, form);
    if (resp.ok) {
      dispatch(setNotificacion(creaNotificacion('success', 'Usuario creado')));
      dispatch(startSetUsuarios());
    };
    if (resp.response) {
      dispatch(setNotificacion(creaNotificacion('error', resp.response.data.response)));
    };
  };
};

export const startActualizarEstadoUsuario = (form) => {
  return async (dispatch) => {

    const resp = await fetch('POST', `${urlBase}/api/Usuarios/actualizarEstado`, form);
    if (resp.ok) {
      dispatch(setNotificacion(creaNotificacion('success', 'Usuario actualizado')));
      dispatch(startSetUsuarios());
    } else {
      dispatch(setNotificacion(creaNotificacion('error', 'Error al actualizar el estado el usuario')));
    };
  };
};

export const startActualizarUsuario = (form) => {
  return async (dispatch) => {

    const body = {
      nombre: form.nombre,
      email: form.email,
      password: form.password === undefined ? '' : form.password,
      rol: form.rol,
      activo: form.activo,
      uid: form.uid
    };
    const resp = await fetch('POST', `${urlBase}/api/Usuarios/actualizarUsuario`, body);
    if (resp.ok) {
      if (resp.data.actualizado) {
        dispatch(setNotificacion(creaNotificacion('success', `${resp.data.nombre} actualizado`)));
        dispatch(startSetUsuarios());
      } else {
        dispatch(setNotificacion(creaNotificacion('error', `No actualizado`)));
      };
    };
  };
};

export const startSetOpcionesUsuarios = () => {
  return async (dispatch) => {
      const resp = await fetch('GET', `${urlBase}/api/Usuarios/obtenerOperador`);
      if (resp.ok) {
        dispatch(setOpcionesUsuario(resp.data));
      };
  }
}