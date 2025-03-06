import { fetch } from "../api/api";
import { urlBase } from "../const/url";

export const getUsers = async()=>{
  try {
    const resp = await fetch('GET', `${urlBase}/api/Usuarios`);
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const opc = async () => {
  try {
    const resp = await getUsers();
    if (!resp.ok) {
      return;
    }
    const { data } = resp;
    const a = [];
    const arr = data.filter(a => (a.rol.includes("Operador") && (a.activo === true)) && (a.activo === true));
    let aux = arr.map(o => {
      return {
        value: o.email,
        label: o.nombre
      }
    });
    const usuariosOpciones = {
      usuarios:resp.data,
      opciones:aux,
    };
    return usuariosOpciones;
  } catch (error) {
    console.log(error);
  }
};

