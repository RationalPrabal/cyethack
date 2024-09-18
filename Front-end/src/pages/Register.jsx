// Register.jsx

import { Form, Input, Button, Card, notification } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { registerUser } from "../redux/auth/action";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const { registered, error } = useSelector((state) => state.authReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(registerUser(values));
  };

  useEffect(() => {
    if (registered) {
      notification.success({
        message: "Registration Successful",
        description: "You have registered successfully!",
      });
      navigate("/");
    } else if (error) {
      notification.error({
        message: "Registration Failed",
        description: error, // Assuming the error message comes from Redux store
      });
    }
  }, [registered, error]);

  return (
    <div style={{ padding: "50px", maxWidth: "400px", margin: "0 auto" }}>
      <Card title="Register" bordered={false}>
        <Form
          name="register"
          onFinish={onFinish}
          initialValues={{ remember: true }}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "The input is not valid E-mail!" },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" />
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
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
