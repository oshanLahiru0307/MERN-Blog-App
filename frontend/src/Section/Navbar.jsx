import React from "react";
import { Layout, Button, Typography } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from '../assets/airbnb_1724634.png'
const { Title, Text } = Typography;

const { Header } = Layout;

const Navbar = () => {
    return (
        <Header
            style={{
                background: "#fff",
                padding: "0 40px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "80px",
            }}
        >
            {/* Left - Logo */}
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    justifyContent: "center"
                }}>
                <Link to="/" style={{ lineHeight: "0" }}>
                    <img width="40px" height="40px" src={logo} alt="logo" />
                </Link>
                <Link to="/" style={{ lineHeight: "0" }}>
                    <Title level={3} style={{ color: "#1890ff", textAlign: "center", margin: "0" }}>
                        Hexa Blog
                    </Title>
                </Link>

            </div>

            {/* Center - Navigation Menu */}
            <div>
                <ul style={{
                    display: "flex",
                    gap: "20px",
                    listStyle: "none",
                    padding: "0",
                    margin: "0",
                    fontSize: "16px",
                    fontWeight: "500",
                    fontFamily: "Arial, sans-serif"
                }}>
                    <li ><Link to='/' style={{ color: '#727D73' }}>Home</Link></li>
                    <li><Link to='/login' style={{ color: '#727D73' }}>About</Link></li>
                    <li><Link to='/register' style={{ color: '#727D73' }}>Contact</Link></li>
                </ul>
            </div>

            {/* Right - Notifications & Sign In */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* Notification Icon */}
                <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />
                {/* Sign In Button */}
                <Link to="/login">
                    <Button type="primary" style={{ borderRadius: '25px', width: '100px', boxShadow: "0 5px 20px rgba(54, 80, 255, 0.74)", }}>Sign In</Button>
                </Link>
            </div>
        </Header>
    );
};

export default Navbar;
