import React from 'react'
import { Flex, Typography, Avatar, Button } from 'antd'
import { BiEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { useSnapshot } from 'valtio';
import state from '../State/state';

const { Title, Link, Text } = Typography

const MyPost = () => {

  const user_State = useSnapshot(state)
  const user = user_State.currentUser

  return (
    <Flex
      vertical
      style={{
        marginTop:'10px'
      }}
      >
      <div
        style={{
          width: '300px',
          height: '200px',
          background: 'url("https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          borderRadius: '20px'
        }}>
      </div>
      <div
        style={{
          width: '300px',
          margin: '20px 0'
        }}>
        <Link strong style={{
          margin: '20px 0'
        }} href="#" target='blank'>Technology</Link>
        <Title style={{
          margin: "10px 0"
        }} level={4}>Simon Lizzotte Take A Big Advance In The Last Tournament</Title>
        <Text>
          In the fast-evolving landscape of education, technology has become an indispensable tool for shaping literacy development,
          especially in regions like rural Africa....
        </Text>

      </div>


      <div
      style={{
        display:'flex',
        alignItems:'center'
      }}>
        <Avatar
          style={{
          }} size={64}
          src={user.profilePhoto ? `http://localhost:4000/uploads/${user.profilePhoto}` : "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"} alt="avatar" />
        <div style={{ margin: '5px 15px' }}>
          <h4 style={{ margin: '0' }}>
            Anna Powlowicz
          </h4>
          <text style={{
            color: '#696969'
          }}>13-03-2025</text>
        </div>
          <Button type='default' style={{
            border:'none',
            padding:'5px',
            boxShadow:'none'
          }}>
            <BiEdit style={{
            height:'20px',
            width:"20px"
        }}/></Button>
        <Button type='default' danger
        style={{
            border:'none',
            padding:'5px',
            marginLeft:'10px',
            boxShadow:'none'
        }}>
        <MdDeleteForever style={{
            height:'20px',
            width:"20px"
        }} />
        </Button>
      </div>
    </Flex>
  )
}

export default MyPost
