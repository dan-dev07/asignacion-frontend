import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { startSetUsuarios } from "../../store/slices/usuarios/thunks";
import { useEffect } from "react";
import { useColumns } from "./useColumns";

export const UsuariosLista = () => {
  const dispatch = useDispatch();
  const {usuarios} = useSelector(state => state.usuariosReducer);
  const { columns } = useColumns ();

  useEffect(() => {
    dispatch(startSetUsuarios());
  }, []);
  return (
    <Table
      style={{ marginTop: 5 }}
      columns={columns}
      dataSource={usuarios}
      rowKey={(record) => record.uid}
    />
  )
}
