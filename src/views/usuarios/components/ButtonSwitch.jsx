import { useDispatch } from 'react-redux';
import { Switch } from 'antd';
import { startActualizarEstadoUsuario } from '../../../store/slices/usuarios/thunks';

export const ButtonSwitch = ({ record }) => {
  const dispatch = useDispatch();

  const onChange = async (checked, { uid }) => {
    const form = {
      uid,
      activo:checked
    }
    dispatch(startActualizarEstadoUsuario(form));
  };

  return (
    <Switch value={record.activo} onChange={(e) => onChange(e, record)} />
  )
}
