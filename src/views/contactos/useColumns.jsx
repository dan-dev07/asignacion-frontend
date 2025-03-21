import { useContext } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { WechatFilled } from '@ant-design/icons';
import { Button } from 'antd';
import { SocketContext } from '../../context/SocketContext';
import { setNotificacion } from '../../store/slices/notificacion/notificiacionSlice';
import { creaNotificacion } from '../../utils/creaNotificacion';

export const useColumns = () => {
  const dispatch = useDispatch();
  const {socket} = useContext(SocketContext);
  const navigate = useNavigate();

  const onClickConversar = (record) => {
    navigate(`/conversacionActual/${record.telefono}`);
  };

  const onClickEnviarPlantilla = (record) => {
    const {telefono, uid} = record;
    console.log(telefono);
    socket.emit('enviar-template', {telefono, uid}, (res) => {
      if (res.ok) {
        dispatch(setNotificacion(creaNotificacion('success', 'Mensaje Inicial envido')));
      } else {
        dispatch(setNotificacion(creaNotificacion('error', 'Mensaje no enviado')));
      };
    });
  };

  const columns = [
    {
      title: 'Externo',
      dataIndex: 'datosExterno',
      key: 'uid',
      sorter: (a, b) => {
        const nombreA = a.datosExterno.nombre;
        const nombreB = b.datosExterno.nombre;
        return nombreA.toLowerCase().localeCompare(nombreB.toLowerCase());
      },
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) => {
        const { telefono, datosExterno: { nombre, apellido } } = record;
        return <>
          {nombre && <p> {`${nombre} ${apellido}`} </p>}
          {telefono && <p> {`${telefono.slice(-10)}`} </p>}
        </>
      }
    },
    {
      title: 'Solicitar Servicio',
      dataIndex: '',
      key: 'uid',
      render: (text, record, index) => {
        const { telefono, datosExterno: { nombre, apellido } } = record;
        return <Button
          onClick={()=>onClickEnviarPlantilla(record)}
        > Solicitar Servicio </Button>
      }
    },
    {
      title: 'Fecha',
      dataIndex: 'fecha',
      key: 'uid',
      sorter: (a, b) => {
        const formatFecha = (fecha) => {
          const [fechaParte, horaParte] = fecha.split(','); // Separar la fecha de la hora
          const [dia, mes, año] = fechaParte.split('/'); // Desestructurar la fecha
          return `${año}-${mes}-${dia} ${horaParte.trim()}`; // Formato "YYYY-MM-DD HH:MM:SS"
        };

        const fechaA = new Date(formatFecha(a.fecha));
        const fechaB = new Date(formatFecha(b.fecha));

        return fechaA - fechaB; // Comparar las fechas numéricamente
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Ultimo Mensaje',
      dataIndex: 'mensaje',
      key: 'uid',
      sorter: (a, b) => a.mensaje.toLowerCase().localeCompare(b.mensaje.toLowerCase()),
      sortDirections: ['descend', 'ascend'],
      render: (text, record, index) =>
        <span >
          {record.mensaje}
        </span>
    },
    {
      title: 'Conversar',
      key: 'uid',
      render: (text, record, index) => {
        return <span
          style={{ cursor: 'pointer', display: 'flex', justifyContent: 'center', gap: 5 }}
          onClick={() => {
            onClickConversar(record);
          }} >
          <WechatFilled style={{ fontSize: 20, }} />
          Conversar
        </span>
      },

    },
  ];

  return {
    columns,
  };
};
