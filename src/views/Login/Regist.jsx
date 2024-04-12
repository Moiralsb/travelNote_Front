import { useState } from 'react';
import axios from 'axios';
import './regist.modules.css';

export default function Regist() {
    const [avatar, setAvatar] = useState(null);
    const [username, setUsername] = useState('');
    const [useremail, setUseremail] = useState('');
    const [userpassword, setUserpassword] = useState('');
    const [previewSrc, setPreviewSrc] = useState(null);

    const goToLogin = () => {
        window.location.href = '/login';
    }

    const handleRegistSubmit = (e) => {
        e.preventDefault();
        // alert('占位');
        // 使用 axios 或 fetch 将表单数据发送到后端
        const formData = new FormData();
        formData.append('avatar', avatar);
        formData.append('username', username);
        formData.append('useremail', useremail);
        formData.append('userpassword', userpassword);

        const response = axios.post('http://localhost:3000/api/userregist', formData, {
            headers: {
                'Content-Type': 'regist/form-data'
            }
        })
            .then(response => {
                // 打印响应结果
                console.log(response);
                if (response.data.success) {
                    // 注册成功，可以重定向到登录页面或显示成功消息
                    alert(response.data.message);
                } else {
                    // 注册失败，显示错误消息
                    alert(response.data.message);
                }
            })
            .catch(error => {
                // 请求失败，停止加载动画并显示错误
                console.error(error);
            });

            alert('用户注册成功，快去登录吧！')
            window.location.href = '/login';
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            setAvatar(file);
            console.log(file);
        } else {
            // alert("请确保上传文件为图片!");
            setAvatar(null);
        }

        // 读取文件以设置预览
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewSrc(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    const handleusernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleuseremailChange = (e) => {
        setUseremail(e.target.value);
    };

    const handleuserpasswordChange = (e) => {
        setUserpassword(e.target.value);
    };

    return (
        <div className="body-regist">
            <div className="registration-form">
                <button onClick={goToLogin}>已有账号？返回登录</button>
                <h2>注册新用户</h2>
                <form onSubmit={handleRegistSubmit}>
                    <div className="form-group">
                        {/* <AvatarUploader /> */}
                        <label>
                            Upload Avatar:
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept="image/*" />
                        </label>
                        {previewSrc && (
                            <img
                                src={previewSrc}
                                alt="Uploaded Avatar"
                                className='avatar' />
                        )}
                    </div>
                    <div className="form-group">
                        <label htmlFor="username">用户名:</label>
                        <input
                            type="text"
                            onChange={handleusernameChange}
                            id="username"
                            name="username"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">邮箱:</label>
                        <input
                            type="email"
                            onChange={handleuseremailChange}
                            id="email"
                            name="email"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码:</label>
                        <input
                            type="password"
                            onChange={handleuserpasswordChange}
                            id="password"
                            name="password"
                            required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirm-password">确认密码:</label>
                        <input
                            type="password"
                            id="confirm-password"
                            name="confirm-password"
                            required
                        />
                    </div>
                    <button
                        className='button-regist'
                        type="submit">注册</button>
                </form>
            </div>
        </div>
    )
}