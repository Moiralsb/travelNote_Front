import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";

import { searchTrips } from '../../api/searchTrips';
import TravelList from '../../components/TravelList/TravelList';
import './home.modules.css';

export default function SearchPage() {
    const { query } = useParams();
    console.log(query);
    const [resultposts, setResultposts] = useState([]);

    useEffect(() => {
        const SearchPosts = async () => {
            const searchedTrips = await searchTrips(query);
            setResultposts(searchedTrips);
        };

        SearchPosts();
    },[]);

    function goToBack() {
        window.location.href = '/';
    };


    return (
        <>
            <button onClick={goToBack}>返回</button>
            <div className='home-style'>
                <TravelList fetchData={resultposts} />
            </div>
        </>
    );
}