import React from 'react'

function Reviews ({reviews}) {
    return <section>
        {
            reviews.map(({id, name, position, image})=> {
                return <div key={id}>
                     <div className='image-container'>
                        <img src={image} alt={image} />
                       <div><h1>,,</h1></div> 
                     </div>
                     <h2>{name}</h2>
                     <h3>{position}</h3>
                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto libero rem nam. Aliquid, iure corrupti sint nam deleniti ipsum odio minima. Modi nemo doloribus consequuntur porro delectus in placeat maxime.</p>
                     
                </div>
               
            })
        }
    </section>
}

export default Reviews