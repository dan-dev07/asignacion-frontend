import { MostrarDocumento } from "../mostrarDocumento/MostrarDocumento";
import { MostrarImagen } from "../mostrarImagen/MostrarImagen";
import { MostrarTexto } from "../mostrarTexto/MostrarTexto";

export const OutgoingMessage = ({mensaje, handleClick}) => {
  if (mensaje?.tipo === 'image') return <MostrarImagen mensaje={mensaje}/>;

  if (mensaje?.tipo === 'document') return <MostrarDocumento mensaje={mensaje} />;

  return <MostrarTexto mensaje={mensaje} handleClick={handleClick}/>
};
