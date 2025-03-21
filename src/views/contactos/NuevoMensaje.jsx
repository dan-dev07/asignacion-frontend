import { useState } from 'react';
import { Button, Col, Row } from 'antd';
import { useDispatch } from 'react-redux';
import InputText from '../../components/InputText';
import { NuevoMensajeModal } from './nuevoMensajeModal/NuevoMensajeModal';
import { startFiltroContacto } from '../../store/slices/filtroTexto/thunks';
import { esSoloNumero } from '../../utils/esSoloNumero';
import { startObtenerContactosApi } from '../../store/slices/mensajes/thunks';
import { eliminarAcentos } from '../../utils/textoSinAcentos';

export const NuevoMensaje = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onClick = ()=>{
    setOpen(true);
  };

  const onChangeFiltroContacto = ({target})=>{
    const {value} = target;
    const filtro = value.trim();
    if (esSoloNumero(filtro) && filtro.length > 0) {
      dispatch(startFiltroContacto(filtro));
    }else if (typeof(filtro) === 'string' && filtro.length > 0) {
      const sinAcentos = eliminarAcentos(filtro);
      dispatch(startFiltroContacto(sinAcentos));
    }else{
      dispatch(startObtenerContactosApi());
    };
  };

  return (
    <Row style={{}} justify={'space-between'} align={'bottom'}>
      <Col xs={24} md={8}>
          <InputText 
            label={'Buscar'}
            name={'buscar'}
            placeholder={'Nombre o teléfono'}
            onChange={onChangeFiltroContacto}
          />
      </Col>

      <Col xs={24} md={4}>
        <Button type='primary' style={{margin:'5px 0'}}
          onClick={onClick}
        >
          Solicitar Nuevo Contacto
        </Button>
        <NuevoMensajeModal open={open} setOpen={setOpen}/>
      </Col>
    </Row>
  );
};
