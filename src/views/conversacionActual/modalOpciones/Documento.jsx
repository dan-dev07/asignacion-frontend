import { FilePdfOutlined } from '@ant-design/icons';

export const Documento = ({filename}) => {
  return (
    <div>

      <FilePdfOutlined style={{ fontSize: '50px' }} />
      <p>{filename}</p>
    </div>
  );
};
