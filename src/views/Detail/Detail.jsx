import { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import styles from './detail.module.css';

export default function Detail() {
  const { travelId } = useParams();
  // console.log(travelId);

  const [currentUrl, setCurrentUrl] = useState('');

    // 获取当前页面的URL
    useEffect(() => {
      const url = window.location.href;
      setCurrentUrl(url);
    }, []);

  const location = useLocation();

  const travelItem = location.state?.travelItem;

  const foundTravel = travelItem;
  console.log(foundTravel);

  const navigate = useNavigate();

  // 分享到微信
  const handleShare = () => {
    const weChatUrl = `weixin://dl/business/?appid=微信公众号或小程序AppID&url=${encodeURIComponent(currentUrl)}`;
    window.open(weChatUrl, '_blank');
  }

  return (
    <>
      <div className={styles.detailNavigate}>
        <button onClick={() => navigate(-1)}>Back</button>
        <div className={styles.detailusershow}>
          <img src={foundTravel.useravatar} 
          className={styles.detailuseravatarshow}/>
          <span>{foundTravel.username}</span>
        </div>
        {/* <p>游记ID:{travelId}</p> */}
        <button onClick={handleShare}>分享</button>
      </div>

      <div>
        <img 
        src={foundTravel.travenotePictures}
        className={styles.detailPicture}/>
      </div>
      <div className={styles.detailTitle}>
        游记标题
        <h3>{foundTravel.travelnoteTitle}</h3>
      </div>
      <div>
        <p className={styles.detailContent}>
        游记内容:<br />
          {foundTravel.travelnoteContent}
        </p>
      </div>
      <div className={styles.detailExtras}>
        点赞|评论
      </div>
    </>

  )
}