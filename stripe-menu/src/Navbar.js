import React from 'react'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from './context'

function Navbar () {
  const {showSubmenu, removeSubmenu, showSidebar} = useGlobalContext()

  function displaySubmenu (e) {
    const buttonText = e.target.textContent
    const buttonProperty = e.target.getBoundingClientRect()
    const buttonCenter = (buttonProperty.left + buttonProperty.right) / 2
    const buttonBottom = buttonProperty.bottom + 5
    showSubmenu(buttonText, {buttonCenter, buttonBottom})
  }
  
  function closeSubmenu (e) {
    if(!e.target.classList.contains('link-btn')) {
      removeSubmenu()
    }
  }
  
  return <nav onMouseOver={closeSubmenu}>
    <div className="nav-header">
      <h1>stripe</h1>
      <button onClick={showSidebar} className='toggle-btn'><FaBars/></button>
    </div>
    <ul className="nav-links">
      <li>
        <button onMouseOver={displaySubmenu} className='link-btn'>products</button>
      </li>
      <li>
        <button onMouseOver={displaySubmenu} className='link-btn'>developers</button>
      </li>
      <li>
        <button onMouseOver={displaySubmenu} className='link-btn'>company</button>
      </li>
    </ul>
    <button>Sign in</button>
  </nav>
}

export default Navbar