// 该组件暂未使用 

import React, { useState } from 'react';

function ImageUploader() {
    const [files, setFiles] = useState([]);
    const MAX_FILES = 5; // 设置允许的最大文件数量

    const handleFilesClick = () => {
        document.querySelector('input[type="file"]').click();
    };

    const handleFilesChange = (e) => {
        // console.log(e.target.files); // 添加这行代码来检查文件列表
        if (files.length < MAX_FILES) {
            // 如果未达到最大值，则添加新文件到files数组
            const selectedFiles = Array.from(e.target.files);
            setFiles(prevFiles => [...prevFiles, ...selectedFiles]);
        } else {
            // 如果已达到最大值，则提示用户已达到最大上传限制
            alert('已达到最大上传照片数量！');
        }
    };

    const handleFileDelete = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    return (
        <div style={{ display: 'flex' }}>
            <input type="file"
                multiple accept="image/*"
                onChange={handleFilesChange}
                style={{ display: 'none' }}
            />
            <button onClick={handleFilesClick}>上传图片</button>
            {files.map((file, index) => (
                <div key={index}>
                    <img
                        src={URL.createObjectURL(file)}
                        alt=""
                        className='imageuploader' />
                    <button onClick={() => handleFileDelete(index)}>删除</button>
                </div>
            ))}
        </div>
    );
}

export default ImageUploader;