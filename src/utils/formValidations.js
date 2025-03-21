import { esEmailValido } from "./esEmailValido";
import { esSoloNumero } from "./esSoloNumero";

export const formValidations = {
  nombre: [(value) => value.length >= 5 && value !== '', 'Mínimo 5 caracteres'],
  email: [(value) => esEmailValido(value), 'El correo no es válido'],
  password:[(value) => value.length >= 5 && value !== '', 'Mínimo 5 caracteres'], 
  rol: [(value) => value.length > 0 , 'Al menos un rol para cada usuario'],
};

export const formValidationsUsuarios = {
  nombre: [(value) => value.length >= 5 && value !== '', 'Mínimo 5 caracteres'],
  email: [(value) => esEmailValido(value), 'El correo no es válido'],
  password:[(value) => true, ''], 
  rol: [(value) => value.length > 0 , 'Al menos un rol para cada usuario'],
  activo:[(value)=> value !== undefined || value !== null, 'Falta elegir el estado del usuario']
 };

 export const formValidationsDatosContacto ={
  nombre: [(value) => value.length >= 3, 'Mínimo 3 caracteres'],
  apellido: [(value) => value.length >= 1 || value === '', 'Necesito este campo'],
  empresa: [(value) => value.length >= 1 || value === '', 'Mínimo 5 caracteres'],
  telefono:[(value) => (value.length === 10 || value.length === 12) && esSoloNumero(value),'10 números']
 }