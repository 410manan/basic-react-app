import React, { useState, useEffect } from 'react';
import './Cards.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../State/index';


const Card = () => {
  const dispatch = useDispatch();
  const {removeFromCart, addToCart} = bindActionCreators(actionCreators, dispatch);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctype = 'Website Item';
        const fields = ["item_name", "web_item_name", "website_image"];
        const filters = [['new_arrival', '=', 1]];
        const itemsPerPage = 10;
        const currentPage = 1;

        const queryParams = new URLSearchParams({
          fields: JSON.stringify(fields),
          filters: JSON.stringify(filters),
          limit_start: (currentPage - 1) * itemsPerPage,
          limit_page_length: itemsPerPage
        }).toString();
        
        const url = `https://beta.lswdistro.com/api/resource/${encodeURIComponent(doctype)}?${queryParams}`;

        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className='top-header'>
    <div  className="top-section"><p className='header-of-card-container'> New Arrivals</p></div>
    <div className="card-container">
      {data && data.map((item, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src={item.website_image.startsWith('/') ? `https://beta.lswdistro.com${item.website_image}` : item.website_image} className="card-img-top" alt={item.item_name || 'Card Image'} />
          <div className="card-body">
            {item.web_item_name && (
              <h5 className="card-title">{item.web_item_name}</h5>
            )}
            <p className="card-text">{item.item_name}</p>
            <div className='button-group'>
            <button onClick={()=>{removeFromCart(1)}}>-</button>
            <button onClick={()=>{addToCart(1)}}>+</button><br/>
            </div>
            <button> Quick View </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Card;
