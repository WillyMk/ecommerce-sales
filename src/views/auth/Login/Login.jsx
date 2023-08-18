import React, { useState } from 'react';
import { Button, message } from 'antd';
import './index.css';
import { useNavigate } from 'react-router-dom';
import loginPhoto from './four.jpg';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission
    if (userName.length > 0 && password.length > 0) {
      if (userName === 'user' && password === '123') {
        setLoading(true);
        localStorage.setItem('access_token', true);
        navigate('/');
        message.success('Login successful');
        setLoading(false);
      } else {
        message.warning('Incorrect credentials !!!');
      }
    } else {
      message.warning('Please enter a user name and password to login');
    }
  };

  return (
    <div className='login-box'>
      <h2>Login</h2>
      <form>
        <div className='user-box'>
          <input
            type='text'
            name=''
            required=''
            onChange={(e) => setUserName(e.target.value)}
          />
          <label>Username</label>
        </div>
        <div className='user-box'>
          <input
            type='password'
            name=''
            required=''
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <a onClick={handleSubmit} className='login-btn-small'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
        <h4 onClick={() => navigate('/home')}>Back Home</h4>
      </form>
    </div>
  );
};

export default Login;
