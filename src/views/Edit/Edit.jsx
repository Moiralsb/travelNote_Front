import React, { useState } from 'react';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from 'axios';

import '../Add/add.modules.css';
import useUser from '../My/useUser';


export default function Edit() {

    const {travelId} = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const travelItem = location.state?.travelItem;
    const foundTravel = travelItem;

    const [tittle, setTitle] = useState(foundTravel.travelnoteTitle);
    const [content, setContent] = useState(foundTravel.travelnoteContent);
    const [image, setImage] = useState(foundTravel.travenotePictures);
    const [previewSrc, setPreviewSrc] = useState(null);
    const { user, loading } = useUser();

    if (loading) {
        return <div>Loading user information...</div>;
    }

    if (!user) {
        return <div>User not authenticated or token expired.</div>;
    }

    const handleUserPost = (event) => {
        event.preventDefault();
        // 使用 axios 或 fetch 将表单数据发送到后端
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', tittle);
        formData.append('content', content);
        formData.append('_id', travelId);

        axios.post('http://localhost:3000/api/edit', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        alert('游记修改成功！');
        navigate('/My');
    };

    const handleImageChange = (event) => {
        // setImage(event.target.files[0]);
        const file = event.target.files[0];
        if (file && file.type.match('image.*')) {
            setImage(file);
        } else {
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
                <input type="file" onChange={handleImageChange} required />
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
                <button className="post-button">确认修改</button>
            </form>
        </>
    );
}