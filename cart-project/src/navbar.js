import React from 'react';
import {FaShoppingBag} from 'react-icons/fa'
import {useGlobalContext} from './context'

function Navbar () {
  const {amount} = useGlobalContext()
  return <nav>
    <div className="nav-center">
      <h3>UseReducer</h3>
      <div className="nav-container">
        <h1><FaShoppingBag/></h1>
          <div className="amount-container">
            <h3>{amount}</h3>
          </div>
      </div>
    </div>
  </nav>
}

export default Navbar;
