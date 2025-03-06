import { useSelector } from 'react-redux';
import { Divider, Table } from "antd";
import { useColumns } from './useColumns';
import { NuevoMensaje } from './NuevoMensaje';

export const Contactos = () => {
  const { numerosContacto } = useSelector(state => state.mensajesReducer);
  const { columns } = useColumns();

  return (
    <>
      <NuevoMensaje />
      <Divider />
      <Table
        style={{ marginTop: 5 }}
        columns={columns}
        dataSource={numerosContacto}
        rowKey={(record) => record.uid}
      />
    </>
  );
};
