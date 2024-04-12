import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { fetchPosts } from '../../api/fetchPosts';
import TabBar from '../../components/tabbar/TabBar';
import TravelList from '../../components/TravelList/TravelList';
import './home.modules.css';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAndSetPosts = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    };

    fetchAndSetPosts();
  }, []);

  function handleChange(e) {
    setQuery(e.target.value);
  };

  function handleSearch(query) {
    const encodedQuery = encodeURIComponent(query);
    // alert(encodedQuery);
    navigate(`/search/${query}`);

  };

  function goToLogin() {
    window.location.href = '/login';
  };

  function goToLogout() {
    localStorage.removeItem('userToken');
    // localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <>
      {/* <button onClick={goToLogin}>登录</button> */}
      <button onClick={goToLogout}>退出登录</button>
      <div className='home-style'>
        <TabBar />
        <div >
          {/* 搜索栏: {' '} */}
          <input className='search-bar'
            value={query}
            onChange={handleChange}
            placeholder='搜索游记'
          />
          <button onClick={() => handleSearch(query)}>搜索</button>
        </div>
        <TagBar />
        <TravelList fetchData={posts} />
      </div>
    </>
  );
}

function SearchBar({ query, onChange, onSearch }) {
  return (
    <div >
      {/* 搜索栏: {' '} */}
      <input className='search-bar'
        value={query}
        onChange={onChange}
        placeholder='搜索游记'
      />
      <button onClick={onSearch}>搜索</button>
    </div>

  );
}

function TagBar() {
  return (
    <div className='tag-bar'>标签栏</div>
  )
}