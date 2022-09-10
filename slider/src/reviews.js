import React, {useState, useEffect} from 'react'
import {data} from './data'
import {FaChevronRight, FaChevronLeft} from 'react-icons/fa'
import Content from './content'

function Reviews () {
    const [people, setPeople] = useState(data)
    const [index, setIndex] = useState(0)

    useEffect(()=> {
      if (index < 0) {
        setIndex(people.length - 1)
      }
      if (index === people.length) {
        setIndex(0)
      }
    }, [index])

    useEffect (()=> {
      let intervalId = setInterval(()=> {
        setIndex(index + 1)
      }, 4000)

      return ()=> {
        clearInterval(intervalId)
      }
    }, [index])
    return (
         <div className="container">
            <div className="content-container">
               <Content people={people} index={index} />
           <div className="arrows">
            <button className='prev' onClick={()=> setIndex(index - 1)}><FaChevronLeft /></button>
            <button className='next' onClick={()=> setIndex(index + 1)}><FaChevronRight /></button>
           </div>
           </div>
         </div>
    )
}

export default Reviews