import React from 'react'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
  <nav className='navbar'>
         <div className="nav-center">
          <Link className='logo' to='/'>
            <h1 >The<span>Cocktail</span>DB</h1>
          </Link>
          <ul className='nav-links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='about'>About</Link>
            </li>
          </ul>
         </div>
  </nav>)
}

export default Navbar;
