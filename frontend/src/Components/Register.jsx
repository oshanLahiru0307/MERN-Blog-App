import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, message, Button, Form, Input, Typography } from "antd";
import authController from "../Services/authController";

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await authController.userRegister(values);
      console.log(response);
      if (response) {
        message.success("Registration successful!");
        navigate("/login");
      } else {
        message.error("Registration failed");
      }
    } catch (error) {
      message.error("Error registering. Try again!");
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
        backgroundImage:
          'url("https://img.freepik.com/free-vector/realistic-abstract-technology-particle-background_23-2148431263.jpg?t=st=1741749623~exp=1741753223~hmac=bbcc38b7a9f7b3917db2d3a2855e231a8269d2eb50d0eb77a10222db37f5e7a0&w=1380")',
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
          Create an Account
        </Title>
        <Text type="secondary">
          Fill in the details to register your account.
        </Text>
        <Form
          layout="vertical"
          onFinish={onFinish}
          style={{ marginTop: 20 }}
        >
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone number!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading} block>
              Register
            </Button>
          </Form.Item>
          <Text>
            Already a member? <a href="/login">Sign in</a>
          </Text>
        </Form>
      </Card>
    </div>
  );
};

export default Register;
