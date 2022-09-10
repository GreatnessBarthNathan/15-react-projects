import React, {useState} from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

function Questions ({title, info}) {
  const [showAnswer, setShowAnswer] = useState(false)

return (
        <div className="question">
              <div className="heading" >
                  <h4>{title}</h4>
                  <button onClick={()=> setShowAnswer(!showAnswer)}>{showAnswer ? <FaMinus/> : <FaPlus/>}</button>
             </div>
                {showAnswer && <p>{info}</p>}
       </div>
)
}

export default Questions

