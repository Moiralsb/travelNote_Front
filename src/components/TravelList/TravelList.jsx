//样式表在home.modules.css里
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


export default function TravelList({ fetchData }) {

  // const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const items = fetchData;
  console.log(items);

  // useEffect(() => {
  //   fetchData().then(data => setItems(data));
  // }, [fetchData]);

  function handleShoeDetail(travelId) {
    // window.location.href = `/detail/${travelId}`;
    navigate(
      `/detail/${travelId}`,
      { state: { travelItem: items.find((item) => item._id === travelId) } });
  }

  return (
    <div className='travel-bar'>
      {items.map((item, index) => (
        <div key={index} className='travel-card'
          onClick={() => handleShoeDetail(item._id)}>
          {/* <img src={item.travenotePictures[0]} /> */}
          <img src={item.travenotePictures} />
          <div className='travel-item'>
            {/* <h3>{item.travelnoteTitle}</h3>
            <p>{item.travelnoteContent}</p>
            <p>{item._id}</p> */}
            <h3>{item.travelnoteTitle}</h3>
            {/* <p>{item.travelnoteContent}</p> */}
            <div className="travelcarduserbox">
              <img src={item.useravatar} className="useravatar" />
              <span className="username">{item.username}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}