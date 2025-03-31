import React from "react";
import { Layout, Row, Col, Typography, Space, Divider } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text, Link } = Typography;

const BlogFooter = () => {
  return (
    <Footer style={{ background: "#001529", color: "white", padding: "40px", margin:'0', width:'100%'}}>
      <div style={{ maxWidth: "1200px", margin: "auto", padding: "0 20px" }}>
        <Row gutter={[32, 32]} justify="space-between">
          {/* Brand Section */}
          <Col xs={24} sm={12} md={8}>
            <Title level={3} style={{ color: "white" }}>
              MyBlog
            </Title>
            <Text style={{ color: "#aaa" }}>
              Stay updated with the latest blog posts and news from various domains.
            </Text>
          </Col>

          {/* Quick Links */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white" }}>Quick Links</Title>
            <Space direction="vertical">
              <Link href="/" style={{ color: "#aaa" }}>Home</Link>
              <Link href="/about" style={{ color: "#aaa" }}>About</Link>
              <Link href="/contact" style={{ color: "#aaa" }}>Contact</Link>
              <Link href="/privacy" style={{ color: "#aaa" }}>Privacy Policy</Link>
            </Space>
          </Col>

          {/* Social Media */}
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: "white" }}>Follow Us</Title>
            <Space size="large">
              <Link href="https://facebook.com" target="_blank">
                <FacebookOutlined style={{ fontSize: "24px", color: "#aaa" }} />
              </Link>
              <Link href="https://twitter.com" target="_blank">
                <TwitterOutlined style={{ fontSize: "24px", color: "#aaa" }} />
              </Link>
              <Link href="https://linkedin.com" target="_blank">
                <LinkedinOutlined style={{ fontSize: "24px", color: "#aaa" }} />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <InstagramOutlined style={{ fontSize: "24px", color: "#aaa" }} />
              </Link>
            </Space>
          </Col>
        </Row>

        <Divider style={{ borderColor: "#333", margin: "30px 0" }} />

        <Row justify="center">
          <Text style={{ color: "#aaa" }}>© {new Date().getFullYear()} MyBlog. All rights reserved.</Text>
        </Row>
      </div>
    </Footer>
  );
};

export default BlogFooter;
