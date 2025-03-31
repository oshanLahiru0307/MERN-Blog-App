import React from 'react'
import Navbar from '../Section/Navbar'
import { Flex, Input } from 'antd'
import { RiSearchLine } from "react-icons/ri";
import MyPost from '../Section/myPost';



const MyPosts = () => {
  return (
    <div
    style={{
      margin: '20px 50px'
    }}>
        <Navbar />
      <div
        style={{
          width: '100%',
          height: '150px',
          background: 'url("https://img.freepik.com/free-vector/abstract-classic-blue-screensaver_23-2148421853.jpg?t=st=1741834927~exp=1741838527~hmac=61a8e7573474a1e04ab9a2e5621306882cfb9461ab837aa5a1979780e4c75a45&w=1380")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '20px',
          position: 'relative'
        }}>
          <h1 style={{
            textAlign: 'center',
            color: 'white',
            fontSize: '30px',
            paddingTop: '50px',
          }}>Welcome to 
          Hexa Blog</h1>
      </div>
      <div style={{
        width: '600px',
        height: '60px',
        background: 'white',
        borderRadius: '20px',
        boxShadow: "0 5px 20px rgba(89, 89, 92, 0.31)",
        position: 'absolute',
        top: '45%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        alignItems: 'center',
        padding: '10px 50px'
      }}>
        <RiSearchLine />
        <Input
          placeholder='Search here. . .'
          size='large'
          bordered={false}
        />
      </div>
      <Flex
      style={{
        marginTop:'120px',
        marginBottom:'40px',
        marginLeft:'auto',
        marginRight:'auto'
      }}
      horizontal gap="55px" wrap justify='flex-start'>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
        <MyPost/>
      </Flex>
    </div>
  )
}

export default MyPosts
