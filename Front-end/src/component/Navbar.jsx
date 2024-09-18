import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Layout, Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { logout, setUserDetails } from "../redux/auth/action";
import { useEffect } from "react";

const { Header } = Layout;

const Navbar = () => {
  const { user } = useSelector((state) => state.authReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!user && !sessionStorage.getItem("user")) {
      navigate("/");
    } else {
      dispatch(setUserDetails(sessionStorage.getItem("user")));
    }
  }, [user]);

  return (
    <Header style={{ background: "#001529", padding: "0 20px" }}>
      <div
        className="logo"
        style={{ float: "left", color: "#fff", fontSize: "18px" }}
      >
        My App
      </div>
      <Menu theme="dark" mode="horizontal" style={{ float: "right" }}>
        <Menu.Item key="1">
          <Button
            type="primary"
            icon={<LogoutOutlined />}
            onClick={handleLogout}
            style={{
              backgroundColor: "#ff4d4f", // Red button for logout
              borderColor: "#ff4d4f",
              color: "#fff",
            }}
          >
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
