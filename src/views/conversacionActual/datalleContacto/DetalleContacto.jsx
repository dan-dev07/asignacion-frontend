import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Button, Col, Flex, Row } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ModalAgregar } from './modalAgregar/ModalAgregar';

export const DetalleContacto = ({ telefono}) => {
  const [openContacto, setopenContacto] = useState(false);
  const {datosContacto, loading} = useSelector(state => state.contactoReducer);

  const onClickAgregarContacto = () => {

    setopenContacto(true);
  };

  return (
    <Row gutter={[10, 10]} justify={'space-around'} style={{ backgroundColor: '#39c8b0' }}>
      <Col xs={24} sm={24} md={12} lg={8}
        style={{ width: 'fit-content', alignSelf: 'center' }}
      >
        <UserOutlined style={{ fontSize: 50 }} />
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}>
        <h2>{datosContacto?.nombre ? datosContacto.nombre : 'Nombre Provisional'}</h2>
        <p>{telefono}</p>
      </Col>
      <Col xs={24} sm={24} md={12} lg={8}
        style={{ alignSelf: 'center', justifySelf: 'end' }}
      >
        <Button
          onClick={onClickAgregarContacto}
        >
          Editar
        </Button>
      </Col>
      <ModalAgregar open={openContacto} setOpen={setopenContacto} datosExterno={datosContacto} telefono={telefono} />
    </Row>

  );
};
