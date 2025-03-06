export const validarDatos = (obj) => {
  const { nombre, email, id, telefono } = obj;
  if (!nombre || !id || !email) return false;
  return true;
};