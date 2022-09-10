import React from 'react'

function Result ({paragraphs}) {
    return <div className="container">
           {
            paragraphs.map((paragraph, index)=> {
                return <p key={index}>{paragraph}</p>
            })
           }
    </div>
            
          
}

export default Result