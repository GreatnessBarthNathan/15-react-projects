import React, {useState} from 'react'

function Tour ({id, info, name, price, image, removeTour}) {
const [readMore, setReadMore] = useState(false)

    return <article>
        <div className="single-tour">
              <img src={image} alt={image} />
              <div className="tour-info">
                 <h4>{name}</h4>
                 <p className="tour-price">${price}</p>
              </div>
              <p>{readMore ? info : `${info.substring(0, 100)}...`} <button className='read-more' onClick={()=> setReadMore(!readMore)}>{readMore ? 'show less' : 'show more'}</button></p>
              <button onClick={()=> removeTour(id)}>not interested</button>
        </div>
          
      </article>
}

export default Tour