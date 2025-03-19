import InputText from '../../../../components/InputText';
import { Col, Row } from 'antd';

export const Formulario = ({ form, formValidation, onChangeText, messageError }) => {

  return (
    <Row gutter={[16, 8]}>
      <Col xs={24} md={12}>
        <InputText
          label={'Nombre'}
          name="nombre"
          value={form.nombre}
          onChange={onChangeText}
          err={formValidation.nombreValid && messageError}
        />
        {messageError && <span style={{fontSize:12}}>{formValidation.nombreValid}</span>}
      </Col>

      <Col xs={24} md={12}>
        <InputText
          label={'Apellido'}
          name="apellido"
          value={form.apellido}
          onChange={onChangeText}
        />
      </Col>

      <Col xs={24} md={12}>
        <InputText
          label={'Empresa'}
          name="empresa"
          value={form.empresa}
          onChange={onChangeText}
        />
      </Col>

      <Col xs={24} md={12}>
        <InputText
          label={'Teléfono'}
          name="telefono"
          value={form.telefono}
          onChange={onChangeText}
          readOnly={true}
        />
      </Col>
    </Row>
  );
};