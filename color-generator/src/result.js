import React, {useState, useEffect} from 'react'

function Result ({rgb, weight, hex, index}) {
   const [alert, setAlert] = useState(false)
   const color = rgb.join(',')

   useEffect(()=> {
      let timeout = setTimeout(()=> {
         setAlert(false)
      }, 2000)

      return ()=> clearTimeout(timeout)
   }, [alert])
   return (
               <div className="color" style={{background: `rgb(${color})`}} onClick={()=> {setAlert(true)
                   navigator.clipboard.writeText(`#${hex}`)}}>
                 <h3 className={`${index > 8 && 'lighter-color'}`}>{weight}%</h3>
                 <p className={`${index > 8 && 'lighter-color'}`}>#{hex}</p>
                 <p className={`alert ${index > 8 && 'lighter-color'}`}>{alert && 'COPIED TO CLIPBOARD'}</p>
               </div>
           )
}

export default Result