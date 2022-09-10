import React, {useState} from 'react'
import Result from './result'
import {data} from './data'



function Form () {
  const [input, setInput] = useState(0)
  const [paragraphs, setParagraphs] = useState([])

  function generateText () {
  const newText = data.slice(0, input) 
  setParagraphs(newText) 
  
 if (input <= 0 ) {
    setParagraphs([data[0]])
  }
  if (input > 10) {
    setParagraphs(data)
  }
  }
 
    return <>
        <form>
             <label htmlFor="input">Paragraphs:</label>
             <input type="number" name='number' value={input} onChange={(e)=> setInput(parseInt(e.target.value))}/>
             <button type='button' onClick={()=>generateText()}>GENERATE</button>
        </form>
        <Result paragraphs={paragraphs}/>
        </>
}

export default Form