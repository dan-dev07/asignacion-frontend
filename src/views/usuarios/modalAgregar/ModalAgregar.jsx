import { useState } from 'react';
import { Checkbox, Col, Modal, Row } from 'antd';
import InputText from '../../../input/InputText';
import InputPassword from '../../../input/InputPassword';
import { optionsCheckInput } from '../../../const/rol';
import { useForm } from './useForm';
import { useDispatch } from 'react-redux';
import { startAgregarUsuario } from '../../../store/slices/usuarios/thunks';

export const ModalAgregar = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const {form ,onChangeChecked, onChangeText, isFormValid, formValidation, resetForm } = useForm();
  
  const handleSubmit = ()=>{
    dispatch(startAgregarUsuario(form));
  };

  const handleOk = () => {
    if(!isFormValid()){
      setError(true);
      return;
    }
    setError(false);
    resetForm();
    handleSubmit();
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  
  return (
    <>
      <Modal title="Nuevo Usuario" open={open} onOk={handleOk} onCancel={handleCancel}>
        <Row gutter={[18, 6]}>
          <Col md={12} xs={24}>
            <InputText
              placeholder={'Nombre del usuario'}
              name={'nombre'}
              label={'Nombre'}
              onChange={onChangeText}
              value={form.nombre}
              err={error && formValidation.nombreValid}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.nombreValid}</span>
            }
          </Col>
          <Col md={12} xs={24}>
            <InputText
              placeholder={'Correo electrónico'}
              name={'email'}
              label={'Email'}
              onChange={onChangeText}
              value={form.email}
              err={error && formValidation.emailValid}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.emailValid}</span>
            }
          </Col>
          <Col md={12} xs={24}>
            <InputPassword
              placeholder={'Contraseña'}
              name={'password'}
              label={'Contraseña'}
              onChange={onChangeText}
              value={form.password}
              err={error && formValidation.passwordValid}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.passwordValid}</span>
            }
          </Col>

          <Col md={12} xs={24}>
            <label >Roles</label>
            <Checkbox.Group
              options={optionsCheckInput}
              name='rol'
              onChange={(value) => onChangeChecked(value, 'rol')}
              style={{display:'flex', flexDirection:'row'}}
              defaultValue={['']}
            />
            {
              error && <span style={{ fontSize: 12 }}>{formValidation.rolValid}</span>
            }
          </Col>

        </Row>
      </Modal>
    </>
  );
};