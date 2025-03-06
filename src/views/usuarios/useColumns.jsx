import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import { ButtonSwitch } from './components/ButtonSwitch';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/slices/modal/modalSlice';
import { setUsuario } from '../../store/slices/usuarios/usuariosSlice';

export const useColumns = () => {
  const dispatch = useDispatch();
  const handleClick = (record) => {
    dispatch(setUsuario(record));
    dispatch(setModal(true));
  };

  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'uid',
      sorter: (a, b) => a.nombre.localeCompare(b.nombre),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Correo',
      dataIndex: 'email',
      key: 'uid',
      sorter: (a, b) => a.email.localeCompare(b.email),
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Roles',
      dataIndex: 'rol',
      key: 'uid',
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Activo',
      dataIndex: 'activo',
      key: 'uid',
      sortDirections: ['descend', 'ascend'],
      render: (data, record, index) => {
        return <ButtonSwitch record={record} />
      },
    },
    {
      title: 'Editar',
      dataIndex: 'email',
      key: 'uid',
      sortDirections: ['descend', 'ascend'],
      render: (data, record, index) => {
        return <Button onClick={() => {
          handleClick(record);
        }}>
          <EditOutlined />
        </Button>
      }
    },
  ];
  return {
    columns,
  }
}
