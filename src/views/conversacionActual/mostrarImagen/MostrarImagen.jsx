import { useEffect, useState } from 'react';
import { fetch } from '../../../api/api';
import { urlBase } from '../../../const/url';
import { ModalOpciones } from '../modalOpciones/ModalOpciones';
import { Button, message, Modal } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';

export const MostrarImagen = ({ mensaje }) => {
  const {mensajeRef} = useSelector(state => state.mensajeRefReducer);
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [imagen, setImagen] = useState(null);
  const { urlDocumento, tipo } = mensaje;

  const getImagen = async () => {
    const body = { urlDocumento, tipo };
    const imgRes = await fetch('POST', `${urlBase}/api/Media`, body);
    if (imgRes.ok) {
      return imgRes.data;
    };
  };

  useEffect(() => {
    const fetchImage = async () => {
      const imagen = await getImagen();
      setImagen(imagen.file); // Ahora guardas el resultado en el estado
    };

    fetchImage();
  }, []);


  const handleClic = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div 
      className={`${mensajeRef === mensaje._id ? 'color-id' : ''}`}
      style={{width:'100%'}}
    >
      <img
        onClick={handleClic}
        style={{
          width: '250px',
          height: '250px',
          cursor: 'pointer',
        }}
        src={imagen}
        alt="Imagen del mensaje"
      />
      {mensaje?.caption && <p>{mensaje.caption}</p>}
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


      {isOpen && (
        <div
          onClick={handleClic}
          style={{
            position: 'fixed',
            width:'100wv',
            height:'100hv',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex:10
          }}
        >
          <img
            src={imagen}
            alt="Imagen del mensaje ampliada"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              zIndex: 100
            }}
          />
        </div>
      )}
    </div>
  );
};