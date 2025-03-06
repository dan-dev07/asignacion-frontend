import { fetch } from "../api/api";
import { urlBase } from "../const/url";

export const getDocument = async (urlDocumento, tipo) => {
  try {
    const documentRes = await fetch('POST', `${urlBase}/api/media`, {
      urlDocumento,
      tipo,
    });
    if (documentRes.ok) {
      return documentRes.data;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

export const handleDownload = async (urlDocumento, tipo, filename) => {
  // Crear un Blob a partir de la cadena base64
  try {
    const descarga = await getDocument(urlDocumento, tipo);
    if (!descarga.file) {
      alert('Hubo un error al descargar el archivo ');
      return ;
    }
    const byteCharacters = atob(descarga.file);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: 'application/octet-stream' });

    // Crear un enlace para descargar el archivo
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;

    // Simular un clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Liberar el objeto URL
    URL.revokeObjectURL(url);
  } catch (error) {
    console.log(error);
  }
};

export const handleFile = async (urlDocumento, tipo, filename) => {
  // Crear un Blob a partir de la cadena base64
  try {
    const descarga = await getDocument(urlDocumento, tipo);
    if (!descarga.file) {
      alert('Hubo un error al descargar el archivo ');
      return ;
    };
    return descarga.file;
  } catch (error) {
    console.log(error);
  }
};