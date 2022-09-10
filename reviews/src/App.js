import React, {useState, useEffect} from 'react'
import {data} from './data'
import Reviews from './reviews'
import {FaAngleRight} from "react-icons/fa"
import {FaAngleLeft} from "react-icons/fa"

function App() {
  const [reviews, setReviews] = useState([])
  const [index, setIndex] = useState(0)

  useEffect(()=> {
    const newReview = [data[index]]
    setReviews(newReview)
  }, [index])
  
  if (index === data.length) {
    setIndex(0)
  } 
  if (index < 0) {
    setIndex(data.length - 1)
  }
  return (
    <>
    <div className="heading">
      <h1>our reviews</h1>
      <div className="line"></div>
    </div>
    <div className="content">
    <Reviews reviews={reviews}/>
      <div className='button-container'>
            <button onClick={()=> setIndex(index - 1)}><FaAngleLeft/></button>
            <button onClick={()=> setIndex(index + 1)}><FaAngleRight/></button>
      </div>
      <button className='surprise' onClick={()=> {
        setIndex(Math.floor(Math.random() * data.length) + 1)
      }}>surprise me</button>
    </div>                
    </>
  )
}

export default App
