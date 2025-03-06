import { Col, Row } from "antd"
import InputText from "../../../components/InputText"



export const Formulario = ({form, formValidation, onChangeText, messageError}) => {
  return (
    <Row gutter={[10,10]} justify={'space-between'}>
        <Col xs={24} md={12}>
          <InputText
            label={'Número de teléfono'}
            name='telefono'
            onChange={onChangeText}
            err={formValidation?.telefonoValid && messageError}
          /> 
          {messageError && <span style={{fontSize:12}}>{formValidation.telefonoValid}</span>}
        </Col>
        <Col xs={24} md={12}>
          <InputText 
            label={'Nombre'}
            name='nombre'
            onChange={onChangeText}
            err={formValidation?.nombreValid && messageError}
          /> 
          {messageError && <span style={{fontSize:12}}>{formValidation.nombreValid}</span>}
        </Col>
        <Col xs={24} md={12}>
          <InputText 
            label={'Apellido'}
            name='apellido'
            onChange={onChangeText}
            err={formValidation?.apellidoValid && messageError}
          /> 
          {messageError && <span style={{fontSize:12}}>{formValidation.apellidoValid}</span>}
        </Col>
        <Col xs={24} md={12}>
          <InputText 
            label={'Empresa'}
            name='empresa'
            onChange={onChangeText}
            err={formValidation?.empresaValid && messageError}
          /> 
          {messageError && <span style={{fontSize:12}}>{formValidation.empresaValid}</span>}
        </Col>
      </Row>
  )
}
