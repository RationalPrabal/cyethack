// Login.jsx

import { Form, Input, Button, Card, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/auth/action";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { user, error } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onFinish = (values) => {
    dispatch(loginUser(values));
  };

  useEffect(() => {
    if (user) {
      notification.success({
        message: "Login Successful",
        description: "You have logged-in successfully!",
      });
      navigate("/list-items");
    } else if (error) {
      notification.error({
        message: "Login Failed",
        description: "invalid credentials",
      });
    }
  }, [user, error]);

  return (
    <div style={{ padding: "50px", maxWidth: "400px", margin: "0 auto" }}>
      <Card title="Login" bordered={false}>
        <Form
          name="login"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>

        {/* Link to Register page */}
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          Don't have an account?
          <Link to="/register">
            <Button type="link">Register</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Login;
