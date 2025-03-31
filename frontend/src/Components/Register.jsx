import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  message,
  Button,
  Form,
  Input,
  Typography,
  Row,
  Col,
  Upload,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import authController from "../Services/authController";
import MainBack from "../assets/main_back.jpg";
import CardBack from "../assets/card_back.jpg";

const { Title, Text } = Typography;

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [fileList, setFileList] = useState([]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const response = await authController.userRegister({
        ...values,
        profilePhoto: fileList[0]?.originFileObj,
      });
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

  const uploadProps = {
    listType: "picture",
    fileList: fileList,
    beforeUpload: (file) => {
      const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
      if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
      }
      return isJpgOrPng && isLt2M;
    },
    onChange: (info) => {
      setFileList(info.fileList);
    },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: `url(${MainBack})`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          width: "1200px",
          padding: "0",
          borderRadius: "10px",
          overflow: "hidden",
          background: "white",
        }}
      >
        <Row style={{ height: "600px" }}>
          {/* Left Side - Image */}
          <Col
            span={12}
            style={{
              background: "#1890ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={CardBack}
              alt="Register"
              style={{ width: "100%", height: "100%", objectFit: "cover", position: "relative" }}
            />
            <div
              style={{
                color: "white",
                textAlign: "center",
                position: "absolute",
                padding: "20px",
                bottom: "40%",
              }}
            >
              <Title level={1} style={{ color: "white", textAlign: "center" }}>
                Welcome to WebSite
              </Title>
              <Title level={5} style={{ color: "white", textAlign: "center" }}>
                Lorem ipsum is a dummy or placeholder text commonly used in
                graphic design, publishing, and web development to fill empty
                spaces in a layout that does not yet have content.
              </Title>
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col span={12} style={{
              padding: "20px",
              overflowY: "auto", // Make the content scrollable vertically
              maxHeight: "550px", // Adjust as needed
            }}>
            <Title level={3} style={{ color: "#1890ff", textAlign: "center" }}>
              Create an Account
            </Title>
            <Text
              type="secondary"
              style={{ display: "block", textAlign: "center", marginBottom: 20 }}
            >
              Fill in the details to register your account.
            </Text>
            <Form layout="vertical" onFinish={onFinish}>
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

              <Form.Item label="Profile Photo">
                <Upload {...uploadProps}>
                  <Button icon={<UploadOutlined />}>Select File</Button>
                </Upload>
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" loading={loading} block>
                  Register
                </Button>
              </Form.Item>

              <Text
                type="secondary"
                style={{ display: "block", textAlign: "center" }}
              >
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