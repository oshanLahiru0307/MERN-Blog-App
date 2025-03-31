import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const Categories = () => {
    const location = useLocation(); // Get the current path
    const [current, setCurrent] = useState(location.pathname);

    // Handle menu click
    const handleClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <div style={{
            margin: '40px 0',
            padding: '30px',
            display: 'flex',
            justifyContent: 'center',
        }}>
            <Menu
                onClick={handleClick}
                selectedKeys={[current]} // Active tab tracking
                mode="horizontal"
                style={{
                    borderBottom: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    display: 'flex',
                    gap: '30px'
                }}
            >
                <Menu.Item key="/all" >
                    <Link to="/all">All</Link>
                </Menu.Item>
                <Menu.Item key="/fantasy" >
                    <Link to="/fantasy">Fantasy</Link>
                </Menu.Item>
                <Menu.Item key="/nft" >
                    <Link to="/nft">NFT</Link>
                </Menu.Item>
                <Menu.Item key="/abstract" >
                    <Link to="/abstract">Abstract</Link>
                </Menu.Item>
                <Menu.Item key="/anime" >
                    <Link to="/anime">Anime</Link>
                </Menu.Item>
                <Menu.Item key="/games" >
                    <Link to="/games">Games</Link>
                </Menu.Item>
                <Menu.Item key="/technology" >
                    <Link to="/technology">Technology</Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};



export default Categories;
