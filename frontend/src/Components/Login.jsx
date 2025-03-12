import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, message, Button, Checkbox, Form, Input, Typography, Row, Col } from "antd";
import authController from "../Services/authController";

const { Title, Text } = Typography;

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await authController.userLogin(values);
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
        background: 'url("https://img.freepik.com/free-vector/nice-colors-background-with-fluid-wavy-shapes_1017-33502.jpg?t=st=1741752845~exp=1741756445~hmac=73c473dd296262a02835137cab61a5693addcb292747fd39e93c8ab991968810&w=1800")',
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
          <Col span={12} style={{ background: "#1890ff", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <img
              src="https://img.freepik.com/free-vector/gradient-minimalist-background_23-2150012324.jpg?t=st=1741750603~exp=1741754203~hmac=e59ec322a8ea4adfa906509c0c764a97edb1e4ece038a4df252533e3acd24e40&w=1380"
              alt="Login"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{ color: "white", textAlign: "center", position: "absolute", padding: "20px", bottom: "40%" }}>
            <Title level={1} style={{ color: "white", textAlign: "center"}}>
              Welcome to WebSite
            </Title>
            <Title level={5} style={{ color: "white", textAlign: "center"}}>
            Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to fill empty spaces in a layout that does not yet have content.
            </Title>
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col span={12} style={{ padding: "40px" }}>
            <Title level={3} style={{ color: "#1890ff", textAlign: "center" }}>
              Login Account
            </Title>
            <Text type="secondary" style={{ display: "block", textAlign: "center", marginBottom: 20 }}>
              Enter your credentials to access your account.
            </Text>
            <Form layout="vertical" onFinish={onFinish}>
              <Form.Item label="Email ID" name="email" rules={[{ required: true, message: "Please enter your email!" }]}>
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password!" }]}>
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

              <Text type="secondary" style={{ display: "block", textAlign: "center" }}>
                Not a member? <a href="/register">Sign up</a>
              </Text>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
