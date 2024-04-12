import { useEffect, useState } from 'react'
import style from './NoteCard.module.css'
import { HeartOutline, HeartFill } from 'antd-mobile-icons'
import { Toast } from 'antd-mobile'
import { useNavigate } from 'react-router-dom'

// 缺少参数，当前用户是否like
export default function NoteCard(props) {
  const navigate = useNavigate()
  const [like, setLike] = useState(false)
  const [likeCnt, setLikeCnt] = useState(0)
  const [likeLock, setLikeLock] = useState(false)

  useEffect(()=>{
    setLike(false)
    setLikeCnt(props.likes)
  }, [props.like, props.likes])

  // 修改点赞状态
  const changeLike = ()=>{
    if(likeLock) {
      Toast.show({content:'操作频繁,请稍后重试'})
      console.log('lock,请稍后重试')
    } else {
      setLikeLock(true)
      setTimeout(()=>{
        setLikeLock(false)
      }, 3000)
      if(like) {
        setLikeCnt(likeCnt-1)
        console.log('取消点赞', props.noteID)
      }
      else {
        setLikeCnt(likeCnt+1)
        console.log('点赞', props.noteID)
      }
      setLike(!like)
    }
  }

  // 进入游记详情页面
  const goToNote = ()=>{
    console.log('goToNote', props.noteID)
    navigate(`/detail/${props.noteID}`)
  }

  // 进入用户主页
  const goToUser = ()=>{
    console.log('goToUser', props.userID)
    navigate(`/user/${props.userID}`)
  }


  return (
    <div className={style.noteCardBox}>
      <div className={style.noteCardImage} onClick={goToNote}>
        <img src={props.cover} />
      </div>
      <div className={style.noteCardContent}>
        <div className={style.noteCardTitle} onClick={goToNote}>{props.title}</div>
        <div className={style.noteCardFooter}>
          <div className={style.noteCardUser} onClick={goToUser}>
            <div className={style.noteCardUserAvatar}>
              <img src={props.avatar} />
            </div>
            <div className={style.noteCardUserName}>{props.nickName}</div>
          </div>
          <div className={style.noteCardLikes} onClick={changeLike}>
            {like ? <HeartFill color='red'/> : <HeartOutline />}
            <div className={style.noteCardLikeCnt}>{likeCnt === 0 ? '赞' : likeCnt}</div>
          </div>
        </div>
      </div>
    </div>
  )
}