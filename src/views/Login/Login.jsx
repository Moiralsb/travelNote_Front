import {useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.modules.css';

export default function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 向后端请求
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      // 登录成功处理，比如设置token到localStorage等
      console.log(data)
      localStorage.setItem('userToken', data.token);
      // 导航到应用首页或其他页面
      navigate('/');
    } else {
      // 登录失败处理，比如显示错误消息
      alert(data.message);
    }
  };

  return (
    <>
      <button onClick={() => { window.location.href = '/' }}>首页</button>
      <div className='body-login'>
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" required="" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" required="" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button className='button-login' type="submit" onClick={handleSubmit}>Login</button>
          </form>
          <a className='link-regist' href='/regist'>没有账号？点击注册</a>
        </div>
      </div>
    </>
  )
}