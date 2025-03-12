import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, message, Button, Checkbox, Form, Input, Typography } from "antd";
import authController from "../Services/authController";

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await authController.userLogin(values);
      console.log(response);
      if (response) {
        message.success("Login successful");
        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));
        navigate("/");
      } else {
        message.error("Login failed");
      }
    } catch (error) {
      message.error("Invalid credentials or server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage:'url("https://img.freepik.com/free-vector/realistic-abstract-technology-particle-background_23-2148431263.jpg?t=st=1741749623~exp=1741753223~hmac=bbcc38b7a9f7b3917db2d3a2855e231a8269d2eb50d0eb77a10222db37f5e7a0&w=1380")',
        backgroundSize: "cover",
      }}
    >
      <Card
        style={{
          width: 400,
          padding: "30px",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <Title level={3} style={{ color: "#1890ff" }}>
          Login Account
        </Title>
        <Text type="secondary">
          Enter your credentials to access your account.
        </Text>
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: 20 }}
        >
          <Form.Item
            label="Email ID"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Checkbox>Keep me signed in</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Subscribe
            </Button>
          </Form.Item>
          <Text>
            Already a member? <a href="/register">Sign up</a>
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
