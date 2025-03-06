import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { Context } from "./Context";
import { ModalOpciones } from "../modalOpciones/ModalOpciones";

export const MostrarTexto = ({ mensaje, handleClick }) => {
  const [open, setOpen] = useState(false);
  const {mensajeRef} = useSelector(state => state.mensajeRefReducer);

  return (
    <div className={`${mensajeRef === mensaje._id ? 'color-id' : ''}`}>
      {mensaje.context && <Context mensaje={mensaje} handleClick={handleClick}/>}
      {mensaje.mensaje}
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
