import React from 'react'
import {Link} from 'react-router-dom'

function Error() {
  return (
  <section className='error-page'>
  <div className="error-container">
    <h1>oops! it's a dead end</h1>
    <Link to='/'>back to home</Link>
  </div>
  </section>)
}

export default Error;
