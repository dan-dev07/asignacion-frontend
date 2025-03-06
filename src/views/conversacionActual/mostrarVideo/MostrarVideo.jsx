import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { DownOutlined, PlayCircleFilled, VideoCameraOutlined } from '@ant-design/icons';
import { handleFile } from "../../../utils/descargaArchivo";
import { VideoDownloader } from "./VideoDownloader";
import { ModalOpciones } from "../modalOpciones/ModalOpciones";

export const MostrarVideo = ({ mensaje }) => {
  const {mensajeRef} = useSelector(state => state.mensajeRefReducer);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const [videoData, setVideoData] = useState(null);
  const { urlDocumento, tipo, filename } = mensaje;
  const [telefono, nombreDoc] = urlDocumento.split("/");

  useEffect(() => {
    const getData = async () => {
      const data = await handleFile(urlDocumento, tipo, nombreDoc);
      setVideoData(data);
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
      <VideoCameraOutlined />
      </span>
      Reproducir Video
    </div>
  }

  return (
    <div >
      <VideoDownloader base64VideoData={videoData} />
      <div>
        <sub>{mensaje.fecha}</sub>
      </div>
      {(
          <>
            <Button style={{ width: 'fit-content' }}
              onClick={() => {
                setOpen(!open);
              }}
            >
              <DownOutlined style={{ fontSize: 10 }} />
            </Button>
            <Modal
              open={open}
              onCancel={() => setOpen(!open)}
            >
              <ModalOpciones mensaje={mensaje} setOpen={setOpen} />
            </Modal>
          </>
        )}
    </div>
  );
};