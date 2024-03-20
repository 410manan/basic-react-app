import React, { useState, useEffect } from 'react';
import './BestSeller.css';

const BestSeller = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const doctype = 'Website Item';
        const fields = ["item_name", "web_item_name", "website_image"];
        const filters = [['best_seller', '=', 1]]; // Adjust the filter for best sellers

        const queryParams = new URLSearchParams({
          fields: JSON.stringify(fields),
          filters: JSON.stringify(filters),
        }).toString();

        const url = `https://beta.lswdistro.com/api/resource/${encodeURIComponent(doctype)}?${queryParams}`;

        const response = await fetch(url);
        const jsonData = await response.json();

        setData(jsonData.data); // Assuming your data is nested within a 'data' property
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
    <div  className="top-section-bestseller"><p className='header-of-card-container'> Best Seller</p></div>
    <div className="card-container">
      {data && data.map((item, index) => (
        <div className="card" style={{ width: '18rem' }} key={index}>
          <img src={item.website_image.startsWith('/') ? `https://beta.lswdistro.com${item.website_image}` : item.website_image} className="card-img-top" alt={item.item_name || 'Card Image'} />
          <div className="card-body">
            {item.web_item_name && (
              <h5 className="card-title">{item.web_item_name}</h5>
            )}
            <p className="card-text">{item.item_name}</p>
            <button> Quick View </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default BestSeller;
