import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Button, Modal } from "antd";
import { DownOutlined, PlayCircleFilled } from '@ant-design/icons';
import { handleFile } from "../../../utils/descargaArchivo";
import { AudioDownloader } from "./AudioDownloader";
import { ModalOpciones } from "../modalOpciones/ModalOpciones";

export const MostrarAudio = ({ mensaje }) => {
  const {mensajeRef} = useSelector(state => state.mensajeRefReducer);
  const [show, setShow] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const { urlDocumento, tipo, filename } = mensaje;
  const [telefono, nombreDoc] = urlDocumento.split("/");

  useEffect(() => {
    const getData = async () => {
      const data = await handleFile(urlDocumento, tipo, nombreDoc);
      setAudioData(data);
    }
    if (show) {
      getData();
    }
  }, [show]);

  if (!show) {
    return <div className={`play-button ${mensajeRef === mensaje._id ? 'color-id' : ''}`}
      onClick={() => setShow(true)}
    >
      <span className="icon">
        <PlayCircleFilled  />
      </span>
      Reproducir Audio
    </div>
  }

  return (
    <div >
      <AudioDownloader base64AudioData={audioData} mensaje={mensaje}/>
      <div>
        <sub>{mensaje.fecha}</sub>
      </div>
      {(
        <>
          <Button style={{ width: 'fit-content' }}
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            <DownOutlined style={{ fontSize: 10 }} />
          </Button>
          <Modal
            open={openModal}
            onCancel={() => setOpenModal(!openModal)}
          >
            <ModalOpciones mensaje={mensaje} setOpen={setOpenModal} />
          </Modal>
        </>
      )}
    </div>
  );
};