import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteMyPosts } from '../../api/deleteMyPost';
import styles from './MyTravelLists.module.css';

export default function MyTravelLists({ myData }) {

    const items = myData;
    // console.log(items);

    const navigate = useNavigate();

    const handleDelet = async (travelId) => {
        // alert("是否删除我的游记?");
        if (window.confirm('你确定要删除这个项目吗？')) {
            try {
                const deletedMyPosts = await deleteMyPosts(travelId);
                console.log(deletedMyPosts);
                if (deletedMyPosts) {
                    alert("游记删除成功");
                } else {
                    alert("游记删除失败");
                }
            } catch (error) {
                console.error('删除失败:', error);
            }

            window.location.reload();
        }
    }

    const handleEdit = (travelId) => {
        // alert("编辑我的游记");
        navigate(
            `/edit/${travelId}`,
            { state: { travelItem: items.find((item) => item._id === travelId) } });

    }

    return (

        <div>
            {items.length > 0 && items.map((item, index) => (
                <div key={index} className={styles.mytravellistscard}>
                    <div className={styles.mytravellistscardshow}>
                        <img
                            src={item.travenotePictures}
                            className={styles.mytravellistsimgshow}
                        />
                        {/* <span>{item.travenotePictures}</span> */}
                        <div className={styles.mytravellistscardtexts}>
                            <h3>{item.travelnoteTitle}</h3>
                            <p>{item.travelnoteContent}</p>
                        </div>
                    </div>
                    <div className={styles.mytravellistscardedit}>
                        <span>{item.auditStatus === 2 ? '已通过' :
                        item.auditStatus === 1 ? '未通过' : '待审核'}</span>
                        <button onClick={() => handleDelet(item._id)}>删除</button>
                        <button onClick={() => handleEdit(item._id)}>编辑</button>
                    </div>
                    <div>
                        {item.rejectionReason &&
                            <p>拒绝理由:{item.rejectionReason}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}