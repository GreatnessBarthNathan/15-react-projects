import React from 'react'
import {Link} from 'react-router-dom'

function Cocktail({id, name, image, info, glass}) {
  return <div className='cocktail'>
            <div className="image-container">
              <img className='image' src={image} alt={name} />
            </div>
            <div className="detail">
                <h1>{name}</h1>
                <h3>{glass}</h3>
                 <p>{info}</p>
                 <Link to={`/cocktail/${id}`}>details</Link>
            </div>
         </div>
}

export default Cocktail;
