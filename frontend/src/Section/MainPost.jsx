import React from 'react'
import { Typography, Avatar } from 'antd'

const { Title, Text } = Typography

const MainPost = () => {
    return (
        <div
            style={{
                padding: '0',
                display: 'flex',
                alignItems: 'start'
            }}>
            <img style={{ borderRadius: '20px' }} width='550px' height='350px' src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='Main Post' />
            <div
                style={{
                    marginLeft: '30px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                }}>
                <Title level={5} style={{
                    margin: '0',
                    padding: '0',
                    color:'#0E86D4'
                }}>Technology</Title>
                <Title level={1} style={{
                    margin: '10px 0',
                    padding: '0'
                }}>An Extra Ordinary WebGl Has Been Realesed By Great China Scientist</Title>
                <Text style={{
                    color:'#696969'
                }}>
                    In the fast-evolving landscape of education, technology has become an indispensable tool for shaping literacy development,
                    especially in regions like rural Africa. At Angaza Center, a nonprofit organization dedicated to empowering students in rural
                    Africa through digital literacy education, we witness firsthand the transformative impact of technology on literacy skills.
                    In this blog, we explore the dynamic relationship between technology and literacy, highlighting the role of nonprofit
                    organizations in leveraging technology for educational purposes.
                </Text>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'start',
                        margin:'15px 0'
                    }}>
                    <Avatar 
                    style={{
                    }}size={64} src={<img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D" alt="avatar" />} />
                    <div style={{margin:'5px 15px'}}>
                        <h4 style={{margin:'0'}}>
                            Anna Powlowicz
                        </h4>
                        <text style={{
                            color:'#696969'
                        }}>13-03-2025</text>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainPost
