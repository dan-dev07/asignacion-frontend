import { MostrarDocumento } from "../mostrarDocumento/MostrarDocumento";
import { MostrarTexto } from "../mostrarTexto/MostrarTexto";
import { MostrarAudio } from "../mostrarAudio/MostrarAudio";
import { MostrarVideo } from "../mostrarVideo/MostrarVideo";
import { MostrarImagen } from "../mostrarImagen/MostrarImagen";


export const IncomingMessage = ({ mensaje, handleClick }) => {
  if (mensaje.tipo === 'image') return <MostrarImagen mensaje={mensaje}/>;

  if (mensaje.tipo === 'document') return <MostrarDocumento mensaje={mensaje} />;

  if (mensaje.tipo === 'audio') return <MostrarAudio mensaje={mensaje} />;

  if (mensaje.tipo === 'video') return <MostrarVideo mensaje={mensaje} />;

  return <MostrarTexto mensaje={mensaje} handleClick={handleClick} />
};
