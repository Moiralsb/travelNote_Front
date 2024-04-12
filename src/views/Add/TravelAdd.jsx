import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './add.modules.css';
import useUser from '../My/useUser';


export default function TravelAdd() {
    const [tittle, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [previewSrc, setPreviewSrc] = useState(null);
    const { user, loading } = useUser();
    const navigate = useNavigate();

    if (loading) {
        return <div>Loading user information...</div>;
    }

    if (!user) {
        return <div>User not authenticated or token expired.</div>;
    }

    const handleUserPost = (event) => {

        setIsLoading(true);

        // window.location.href = '/my'
        event.preventDefault();
        // 使用 axios 或 fetch 将表单数据发送到后端
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', tittle);
        formData.append('content', content);
        formData.append('userid', user.id);
        formData.append('username', user.username);
        formData.append('useravatar', user.avatar);

        try {
            const response = axios.post('http://localhost:3000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            // 请求成功，停止加载动画
            setIsLoading(false);
            // 打印响应结果
            console.log(response);
        }
        catch (error) {
            // 请求失败，停止加载动画并显示错误
            setIsLoading(false);
            console.error(error);
        };
        alert('游记添加成功！');
        navigate('/My');
    };

    const handleImageChange = (event) => {
        // setImage(event.target.files[0]);
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            setImage(file);
        } else {
            // 清除图像或显示错误消息
            // 你可以设置图像状态为null或显示一个错误消息给用户
            alert("请确保上传文件为图片!")
        }

        // 读取文件以设置预览
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreviewSrc(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    function handleTitleChange(e) {
        setTitle(e.target.value)
    };

    function handleContentChange(e) {
        setContent(e.target.value)
    };

    return (
        <>
            <button onClick={() => navigate(-1)}>返回</button>
            <form className='body-add' onSubmit={handleUserPost}>
                <input type="file"
                    onChange={handleImageChange}
                    required
                    className='add-travel-pictures-input' />
                {previewSrc && (
                    <img
                        src={previewSrc}
                        alt="Uploaded Avatar"
                        className='add-travel-pictures-img' />
                )}
                <input
                    value={tittle}
                    onChange={handleTitleChange}
                    className="add-travel-tittle"
                    placeholder='添加游记标题'
                    required
                />
                <textarea className="add-travel-content"
                    value={content}
                    onChange={handleContentChange}
                    placeholder='添加游记正文'
                    required
                />
                <button className="post-button">发布游记</button>
            </form>
            <div>
                {isLoading && <div>正在上传...</div>}
            </div>
        </>
    );
}