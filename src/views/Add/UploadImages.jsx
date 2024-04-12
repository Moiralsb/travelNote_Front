// 该组件暂未使用

import React, { useState } from 'react';
import axios from 'axios';

export default function UploadImages() {
    const [files, setFiles] = useState([]);
    // const [uploadPercentage, setUploadPercentage] = useState(0);
    // const [uploadStatus, setUploadStatus] = useState('');

    const handleFilesChange = (event) => {
        const selectedFiles = event.target.files;
        setFiles(selectedFiles);
    };

    const handleFilesClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const handleFileDelete = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
      };

    // const handleUploadClick = async () => {
    //     if (!file) {
    //         alert('请先选择一个文件！');
    //         return;
    //     }

    //     const formData = new FormData();
    //     formData.append('image', file);

    //     try {
    //         const options = {
    //             onUploadProgress: (progressEvent) => {
    //                 const { loaded, total } = progressEvent;
    //                 let percent = Math.floor((loaded * 100) / total);
    //                 setUploadPercentage(percent);
    //             }
    //         };

    //         const response = await axios.post('http://localhost:3000/api/upload', formData, options);

    //         if (response.data.success) {
    //             setUploadStatus('上传成功');
    //         } else {
    //             console.log(response.data.success)
    //             setUploadStatus('上传失败');
    //         }

    //     } catch (error) {
    //         console.error('上传出错:', error);
    //         setUploadStatus('上传出错');
    //     }
    // };

    return (
        <>
            <div>
                <input
                    type="file"
                    multiple accept="image/*"
                    onChange={handleFilesChange}
                    style={{ display: 'none' }}
                />
                {/* <button onClick={handleUploadClick} disabled={!file}>
                    上传图片
                </button>
                <p>上传进度: {uploadPercentage}%</p>
                <p>上传状态: {uploadStatus}</p> */}
                <button onClick={handleFilesClick}>上传图片</button>
                {files.map((file, index) => (
                    <div key={index}>
                        <img src={URL.createObjectURL(file)} alt="" />
                        <button onClick={() => handleFileDelete(index)}>删除</button>
                    </div>
                ))}
            </div>
        </>
    );
}