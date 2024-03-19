import React from 'react';
import './Navbar.css';

function MyComponent() {
  const imageUrl = 'C:\\Users\\patel\\OneDrive - Infocusp Innovations\\Desktop\\Basic React app\\basic-react-app\\src\\Components\\starx-s20000-smart-touch-screen-20ml-disposable-rechargeable-with-hd-full-screen-pencil-image-dektop-wholesale.gif'; // Replace with your GIF path

  return (
    <div className="gif-container" style={{ backgroundImage: `url(${imageUrl})` }}>
      {/* Other content */}
    </div>
  );
}
export default MyComponent;