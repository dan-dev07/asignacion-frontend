import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import avatar from '../../../assets/avatar.jpg';

export const DetallesInfo = ({ contact }) => {
  const navigate = useNavigate();
  const {datosPaciente} = useSelector(state => state.pacienteReducer);
  const onClickBackButton =()=>{
    navigate(-1);
  }

  return (
    <div className="contact-view">
      <Button onClick={onClickBackButton}>
        <LeftOutlined style={{fontSize:30}}/>
      </Button>
      <div className="contact-header">
        <img
          // src={contact.profilePicture}
          src={avatar}
          alt="Foto de perfil"
          className="profile-img"
        />
        <div className="contact-details">
          <h2 className="contact-name">{datosPaciente?.nombre ? datosPaciente.nombre : 'Nombre Provisional'}</h2>
          <p className="contact-status">{'En linea'}</p>
        </div>
      </div>

      <div className="more-options">
        <button className="more-options-btn">Más opciones</button>
      </div>
    </div>
  );
};
