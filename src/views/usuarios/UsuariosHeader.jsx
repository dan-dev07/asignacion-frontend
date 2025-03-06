import { useState } from "react";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons"
import { ModalAgregar } from "./modalAgregar/ModalAgregar"


export const UsuariosHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom:10}}>
      <Button type='primary' onClick={() => setOpen(true)} >
        Usuario
        <PlusCircleOutlined />
      </Button>
      <ModalAgregar open={open} setOpen={setOpen}/>
    </div>
  )
}
