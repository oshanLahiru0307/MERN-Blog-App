import React from 'react'
import { useState } from 'react'
import { Card, message, Button, Checkbox, Form, Input } from 'antd'
import authController from './Services/authController';

const Login = () => {

    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try{
            const response = await authController.userLogin(values);
            console.log(response)
            if(response.status === 200){
                message.success('Login successful')
                setLoading(false);
            localStorage.setItem('token', response.token)
            localStorage.setItem('user', JSON.stringify(response.user))
            }else{
                message.error('Login failed')
                setLoading(false);
            }
        }catch(error){

        }
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        message.error('Please fill all the fields')
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#f0f2f5'
        }}>
            <Card>

                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 400,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit" loading={loading} block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login
