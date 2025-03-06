import { useNavigate } from 'react-router';
import { WechatFilled } from '@ant-design/icons';

export const useColumns = () => {
  const navigate = useNavigate();

  const onClick = (record) => {
    navigate(`/conversacionActual/${record.telefono}`);
  };

  const columns = [
    {
      title: 'Externo',
      dataIndex:'datosExterno',
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
          {telefono && <p> {`${telefono}`} </p>}
        </>
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
            onClick(record);
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
