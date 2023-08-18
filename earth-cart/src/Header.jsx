import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src="" alt="Earth Cart Logo" />
        <div className="header_search">
            <input type="text" className="header_search_input"  />
            <SearchIcon className='header_searchIcon' style={{color:'#69863C'}}></SearchIcon>
        </div>

        <nav className="header_nav">
          <div className='header_option'>
            <span className="option_line1">
              Hello Guest
            </span>
            <span className="option_line2">
              Sign In
            </span>
          </div>
          <div className='header_option'>
          <span className="option_line1">
              Returns
            </span>
            <span className="option_line2">
              & Orders
            </span>
            
          </div>
          <div className='header_option_basket'>
          <ShoppingBasketIcon className='header_cart_logo' style={{color:'#69863C'}}></ShoppingBasketIcon>
          <span className="option_line2  header_basket_content">0</span>

            
          </div>
        </nav>
    </div>
  )
}

export default Header