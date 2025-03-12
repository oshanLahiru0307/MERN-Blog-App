import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, message, Button, Form, Input, Typography, Row, Col } from "antd";
import authController from "../Services/authController";

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await authController.userRegister(values);
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
        background: 'url("https://img.freepik.com/free-vector/abstract-smooth-gradient-background-with-blur-effect_1017-51593.jpg?t=st=1741750628~exp=1741754228~hmac=457242daffc9a2f3711276bb2fcf6d6e6b6e72317c11fa5f556e668051e402eb&w=1800")',
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: '1200px',
          padding: "0",
          borderRadius: "10px",
          overflow: "hidden",
          background: "white",
        }}
      >
        <Row>
          {/* Left Side - Image */}
          <Col span={12} style={{ background: "#1890ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img
              src="https://img.freepik.com/free-vector/gradient-minimalist-background_23-2150012324.jpg?t=st=1741750603~exp=1741754203~hmac=e59ec322a8ea4adfa906509c0c764a97edb1e4ece038a4df252533e3acd24e40&w=1380"
              alt="Register"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Col>

          {/* Right Side - Form */}
          <Col span={12} style={{ padding: "40px" }}>
            <Title level={3} style={{ color: "#1890ff", textAlign: "center" }}>
              Create an Account
            </Title>
            <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
              Fill in the details to register your account.
            </Text>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Please enter your name!" }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email" rules={[{ required: true, message: "Please enter your email!" }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Phone Number" name="phone" rules={[{ required: true, message: "Please enter your phone number!" }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter a password!" }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block>
                  Register
                </Button>
              </Form.Item>

              <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
                Already a member? <a href="/login">Sign in</a>
              </Text>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Register;
