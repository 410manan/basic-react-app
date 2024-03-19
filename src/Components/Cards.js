import React from 'react';
import './Cards.css'
const Card = ({ imageSrc, title, text }) => {
  return (
    <div className="card-container">
        <p className='header-of-card-container'> New Arrivals</p> 
         {/* Wrap the card in a container (optional) */}
      <div className="card" style={{ width: '18rem' }}>
        <img src={imageSrc} className="card-img-top" alt={title || 'Card Image'} />  {/* Set default alt text */}
        <div className="card-body">
          {title && ( // Conditionally render title if provided
            <h5 className="card-title">{title}</h5>
          )}
          <p className="card-text">{text}</p>
          <button> Quick View </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
