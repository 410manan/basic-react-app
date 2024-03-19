import React from 'react';
import './SearchBar.css'; // Import your CSS styles
import user_account from './user-128.svg'

function SearchBar() {
  return (
    <div className="search-bar">
      <div className="logo-company">
        <img src='https://beta.lswdistro.com/assets/liberty_smoke_ecomm/images/liberty-smoke-logo.svg' height={100} width={300} alt="Company Logo" />
          <input
            type="text"
            placeholder="Search products"
            className="search-input" 
          />
        <div className='user-account'>
            <img src={user_account} height={45} width={45}></img>
        </div>
        
      </div>
    </div>
  );
}

export default SearchBar;
