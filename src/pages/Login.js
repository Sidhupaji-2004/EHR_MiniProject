import React from 'react'
import { Form, Input, message } from 'antd';
import RegisterStyles from '../styles/RegisterStyles.css';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {

  const navigate = useNavigate();
  const onFinishHandler = async(values) => {
    try{
      const res = await axios.post('/api/v1/user/login', values);
      if(res.data.success){
        localStorage.setItem("token", res.data.token);
        message.success('Login successfully');
        navigate('/');
      }
      else{
        message.error(res.data.message);
      }
    }
    catch(error){
      console.log(error);
      message.error("something went wrong");
    }
  }

  return (
    <>
      <div className="form-container">
          <Form layout='vertical' onFinish={onFinishHandler}>
            <h1 className="text-center">Electronic Health Record</h1>
            <h3 className="text-center">Login</h3>
            <Form.Item label="Email" name="email">
              <Input type="email" required/>
            </Form.Item>
            <Form.Item label="Password" name="password">
              <Input type="password" required/>
            </Form.Item>
            <Link to="/register" className="m-2">Not a user register here</Link>
            <button className="btn btn-primary">Login</button>
          </Form>
        </div>
      </>
  )
}

export default Login
