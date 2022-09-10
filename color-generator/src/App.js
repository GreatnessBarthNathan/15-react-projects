import React, {useState} from 'react'

import Values from 'values.js'
import Result from './result'

function App() {
  const [result, setResult] = useState(new Values('blue').all(10))
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)

  function generateColor(e) {
   e.preventDefault()
   try {
   const newColor = new Values(color).all(10)
   setResult(newColor)
   setError(false)
   }
   catch (error) {
    setError(true)
   }
   setColor('')
  }
  return (
    <>
    <section className="container" onSubmit={generateColor}>
      <h3>color generator</h3>
      <form>
        <input type="text" className={`${error && 'red-border'}`} value={color} onChange={(e)=> setColor(e.target.value)} placeholder='e.g blue'/>
        <button className="btn" type='submit'>search</button>
      </form>
    </section>
    <p className='note'>Click a box to copy color shade to your clipboard</p>
    <section className='color-container'>
      {
        result.map((colors, index)=> {
          return <Result key={index} {...colors} index={index} hex={colors.hex}/>
        })
      }
      
    </section>
    </>
  );
}

export default App;
