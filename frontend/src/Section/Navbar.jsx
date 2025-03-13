import React from "react";
import { Layout, Button, Typography } from "antd";
import { BellOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from '../assets/airbnb_1724634.png';
import state from '../State/state';
import { useSnapshot } from "valtio";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Header } = Layout;


const Navbar = () => {
    const navigate = useNavigate()
    const snap = useSnapshot(state);
    const user = snap.currentUser;
    console.log(user);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/login");
    };

    return (
        <Header
            style={{
                background: "#fff",
                padding: "20px 0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "80px",
            }}
        >
            {/* Left - Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Link to="/" style={{ lineHeight: "0" }}>
                    <img width="40px" height="40px" src={logo} alt="logo" />
                </Link>
                <Link to="/" style={{ lineHeight: "0" }}>
                    <Title level={3} style={{ color: "#1890ff", margin: "0" }}>Hexa Blog</Title>
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
                    fontSize: "15px",
                    fontWeight: "500",
                    fontFamily: "Arial, sans-serif"
                }}>
                    <li><Link to="/" style={{ color: '#727D73' }}>Home</Link></li>
                    <li><Link to="/about" style={{ color: '#727D73' }}>About</Link></li>
                    <li><Link to="/contact" style={{ color: '#727D73' }}>Contact</Link></li>
                    {user && <li><Link to="/dashboard" style={{ color: '#727D73' }}>New Post</Link></li>}
                </ul>
            </div>

            {/* Right - Notifications & Sign In/Sign Out */}
            <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                {/* Notification Icon */}
                {user && <BellOutlined style={{ fontSize: "20px", cursor: "pointer" }} />}
                
                {/* Conditional Buttons */}
                {!user ? (
                    <Link to="/login">
                        <Button type="primary" style={{ borderRadius: '25px', width: '100px', boxShadow: "0 5px 20px rgba(54, 80, 255, 0.74)" }}>Sign In</Button>
                    </Link>
                ) : (
                    <Button type="primary" onClick={handleLogout} style={{ borderRadius: '25px', width: '100px', boxShadow: "0 5px 20px rgba(54, 80, 255, 0.74)" }}>Logout</Button>
                )}
            </div>
        </Header>
    );
};

export default Navbar;
