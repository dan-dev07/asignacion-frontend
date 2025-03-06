import { useState } from 'react';
import { Button } from 'antd';
import { PaperClipOutlined } from '@ant-design/icons';
import { ModalCargar } from './modalCargar/modalCarga';

export const CompartirArchivo = ({}) => {

  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <div style={{}}>
      <Button onClick={handleModal}><PaperClipOutlined /></Button>
      <ModalCargar open={open} setOpen={setOpen}/>
    </div>
  )
}
