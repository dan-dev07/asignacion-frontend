import { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { ExcelDocument } from "./ExcelDocument";
import { PdfDocument } from "./PdfDocument";
import { PointDocument } from "./PointDocument";
import { UnknowDocument } from "./UnknowDocumet";
import { WordDocument } from "./WordDocument";
import { ModalOpciones } from "../modalOpciones/ModalOpciones";

const componentes = {
  docx: ({ mensaje }) => <WordDocument mensaje={mensaje} />,
  xlsx: ({ mensaje }) => <ExcelDocument mensaje={mensaje} />,
  pptx: ({ mensaje }) => <PointDocument mensaje={mensaje} />,
  pdf: ({ mensaje }) => <PdfDocument mensaje={mensaje} />,
  doc: ({ mensaje }) => <WordDocument mensaje={mensaje} />,
  xls: ({ mensaje }) => <ExcelDocument mensaje={mensaje} />,
  ppt: ({ mensaje }) => <PointDocument mensaje={mensaje} />,
};

export const MostrarDocumento = ({ mensaje }) => {
  const {mensajeRef} = useSelector(state => state.mensajeRefReducer);
  const [open, setOpen] = useState(false);

  const ext = mensaje.urlDocumento.split('.').reverse()[0];
  const Documento = componentes[ext] || UnknowDocument;

  return (
    <div className={`${mensajeRef === mensaje._id ? 'color-id' : ''}`}>
      <Documento mensaje={mensaje} />
      {mensaje?.caption && <p>{mensaje.caption}</p>}
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
    </div>
  );
};

