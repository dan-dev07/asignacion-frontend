import { useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { fetch } from '../../../api/api';
import { urlBase } from '../../../const/url';
import { setNotificacion } from '../../../store/slices/notificacion/notificiacionSlice';
import { creaNotificacion } from '../../../utils/creaNotificacion';

export const ModalCargar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user } = useSelector(state => state.userReducer);
  const { telefono } = useParams();

  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCarga = async () => {
    setConfirmLoading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('messaging_product', 'whatsapp');
    formData.append('email', user.email);
    formData.append('telefono', telefono);
    formData.append('uidUser', user.uid);

    try {
      const response = await fetch('POST', `${urlBase}/api/Media/carga`, formData, 'multipart/form-data');
      if (response.ok) {
        dispatch(setNotificacion(creaNotificacion('success', 'Archivo enviado')));
        setSelectedFile(null);
      } else {
        dispatch(setNotificacion(creaNotificacion('error', 'Archivo no enviado')));
        setSelectedFile(null);
      };
      setConfirmLoading(false);
    } catch (error) {
      console.log(error);
      setConfirmLoading(false);
      setSelectedFile(null);
    };

  };
  return (
    <>
      <Modal
        cancelButtonProps={{disabled:true}}
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        footer = {<Button disabled={confirmLoading} onClick={() => handleCarga()}>Ok</Button>}
      >
        <div>
          <input 
            type="file" 
            onChange={handleFileChange} 
            required 
          />
        </div>
      </Modal>
    </>
  );
};