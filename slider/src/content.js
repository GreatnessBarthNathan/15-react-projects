import React from 'react'
import {FaQuoteRight} from 'react-icons/fa'

function Content ({people, index}) {
    return (
        <>
         {
                people.map((person, personIndex)=> {
              const{id, name, title, image, quote} = person
            let position = 'next-slide'
            if (personIndex === index) {
                 position = 'active-slide'
            } 
            if (personIndex === index - 1) {
                position = 'previous-slide'
            }
            if (index === 0 && personIndex === people.length - 1) {
                position = 'previous-slide'
            }
            //NOTE=> THE COUNT IS CHANGING BUT THE INDEX REMAINS THESAME
                  return <section className={position} key={id}>
            <img src={image} alt={image} />
            <h2>{name}</h2>
            <h3>{title}</h3>
            <p>{quote}</p>
            <FaQuoteRight className='quote'/>
           </section>
           
                })
          }
        </>
    )
}

export default Content