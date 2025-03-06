import { useSelector } from "react-redux";
import { Tooltip } from "antd";
import { UserOutlined } from "@ant-design/icons";

export const User = ({ collapsed }) => {
  const { user } = useSelector((state) => state.userReducer);

  if (collapsed) {
    return (
      <div style={{ textAlign: "center", fontSize: 12, marginBottom: 10 }}>
        <Tooltip title={user?.nombre}>
          <UserOutlined />
        </Tooltip>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", fontSize: 12, marginBottom: 10 }}>
      <UserOutlined /> {user?.nombre}
    </div>
  );
};
