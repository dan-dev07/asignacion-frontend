import { fetch } from "../../../api/api";
import { urlBase } from "../../../const/url";
import { setNumerosContacto } from "../mensajes/mensajesSlice";
import { setBusquedaNumero, setBusquedaTexto, setLoading } from "./filtroSlice";


export const startFiltroTexto = (texto) => {
  return async (dispatch) => {
    if (texto.length === 0) return dispatch(setBusquedaTexto([]));
    dispatch(setLoading(true));
    const res = await fetch('post',`${urlBase}/api/Datos/buscarTexto`, {texto});
    if (res.ok) {
      dispatch(setBusquedaTexto(res.data));
    };
    dispatch(setLoading(false));
  };
};

export const startFiltroNumero = (numero) => {
  return async (dispatch) => {
    if (numero.length === 0 ) return dispatch(setBusquedaNumero([]));
    dispatch(setLoading(true));
    const res = await fetch('post',`${urlBase}/api/Datos/buscarNumero`, {numero});
    if (res.ok) {
      dispatch(setBusquedaNumero(res.data));
    };
    dispatch(setLoading(false));
  };
};

export const startFiltroContacto = (filtro) => {
  return async (dispatch) => {
    dispatch(setLoading(true));
    const res = await fetch('post',`${urlBase}/api/Datos/buscarContacto`, {filtro});
    if (res.ok) {
      dispatch(setNumerosContacto(res.data));
    };
    dispatch(setLoading(false));
  };
};