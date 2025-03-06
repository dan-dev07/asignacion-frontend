import { Checkbox, Col, Row, Switch } from "antd";
import InputText from "../../../input/InputText";
import InputPassword from "../../../input/InputPassword";
import { optionsCheckInput } from "../../../const/rol";

export const Formulario = ({ form, messageError, formValidation, onChangeText, onChangeVal, onChangeChecked}) => {
  return (
    <Row gutter={[10, 10]}>
      <Col md={12} xs={24}>
        <InputText
          placeholder={'Nombre del usuario'}
          name={'nombre'}
          label={'Nombre'}
          onChange={onChangeText}
          value={form.nombre}
          err={messageError && formValidation.nombreValid}
        />
        {
          messageError && <span style={{ fontSize: 12 }}>{formValidation.nombreValid}</span>
        }
      </Col>
      <Col md={12} xs={24}>
        <InputText
          placeholder={'Correo electrónico'}
          name={'email'}
          label={'Email'}
          onChange={onChangeText}
          value={form.email}
          err={messageError && formValidation.emailValid}
        />
        {
          messageError && <span style={{ fontSize: 12 }}>{formValidation.emailValid}</span>
        }
      </Col>

      <Col md={12} xs={24}>
        <InputPassword
          placeholder={'Contraseña'}
          name={'password'}
          label={'Nueva Contraseña'}
          onChange={onChangeText}
          value={form.password}
        />
      </Col>
      
      <Col xs={12}>
        <p >Estado del usuario</p>
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
          <span>Inactivo</span>
          <Switch value={form.activo} onChange={(e) => onChangeVal(e, 'activo')} />
          <span>Activo</span>
        </div>
        {
          messageError && <span style={{ fontSize: 12 }}>{formValidation.activoValid}</span>
        }
      </Col>

      <Col md={12} xs={24}>
        <label >Roles</label>
        <Checkbox.Group
          options={optionsCheckInput}
          name='rol'
          onChange={(value) => onChangeChecked(value, 'rol')}
          value={form.rol}
          style={{display:'flex', flexDirection:'row'}}
        />
        {
          messageError && <span style={{ fontSize: 12 }}>{formValidation.rolValid}</span>
        }
      </Col>
    </Row>
  )
}
