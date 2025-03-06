import { useDispatch } from 'react-redux';
import { Button, Col, Row } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { startGuardarMensajeContext } from '../../../store/slices/mensajes/thunks';

export const ResponderMensaje = ({ mensaje }) => {
  const dispatch = useDispatch();

  const handleClose = () => {
    if (mensaje !== '') {
      dispatch(startGuardarMensajeContext(''));
    };
  };

  return (
    <Row className='message Escotel'>
      <Col md={20} sm={22}>
        <p>{mensaje}</p>
      </Col>
      <Col span={2} style={{ margin: 'auto' }}>
        <Button
          onClick={() => handleClose()}
          style={{ backgroundColor: '#dcf8c6', border: 'none' }}
        >
          <CloseCircleOutlined style={{ fontSize: 30 }} />
        </Button>
      </Col>
    </Row>
  )
}
