import React from 'react';
import { useState, useEffect } from 'react';
import TabBar from '../../components/tabbar/TabBar';
import { fetchMyPosts } from '../../api/fetchMyPosts';

import useUser from './useUser';
import MyTravelLists from './MyTravelLists';


export default function My() {
  const [myposts, setMyposts] = useState([]);
  const { user, loading } = useUser();


  useEffect(() => {
    if (!loading && user) {
      const fetchAndSetPosts = async () => {
        const fetchedMyPosts = await fetchMyPosts(user.id);
        setMyposts(fetchedMyPosts);
      };
      fetchAndSetPosts();
    };

  }, [user, setMyposts, loading]); // 当 user 或 setMyPosts 变化时，重新执行

  if (loading) {
    return <div>Loading user information...</div>;
  }

  if (!user) {
    return <div>User not authenticated or token expired.</div>;
  }

  return (
    <>
      <TabBar />
      <div>
        <div className='user-info'>
          <div className='user-info-avatar'>
            <img
              src={user.avatar}
              alt="Katherine Johnson"
              className='user-avatar'
            />
          </div>
          <div className='user-info-item'>
            <p>昵称: {user.username}</p>
            <p>ID : {user.id}</p>
          </div>
        </div>
        <div className='my-treval-notes-bar'>
          <div>我的游记</div>
          {/* <div>我的点赞</div> */}
          {/* <div>新增</div> */}
        </div>
        <div className='my-treval-notes-box'>
          <p>游记展示卡</p>
          {/* <TravelList items={results} /> */}
          <MyTravelLists myData={myposts} />
        </div>
      </div>
    </>
  );
}

function List({ items }) {
  return (
    <div className='travel-bar'>
      {items.map(food => (
        <div className='travel-card' key={food.id}>
          <div className='travel-item'>
            {food.name}
            <hr />
            {food.description}
            <hr />
            {food.id}
          </div>
        </div>
      ))}
    </div>
  );
};