import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img className='header_logo' src="" alt="Earth Cart Logo" />
        <div className="header_search">
            <input type="text" className="header_search" />
            {/* Logo for search we do using Material UI  */}
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
          <div className='header_option'>
            {/* Cart Image */}
            
          </div>
        </nav>
    </div>
  )
}

export default Header