import React, {useEffect} from 'react'

function Alert({type, msg, displayAlert}) {

  useEffect(()=> {
   let timeout = setTimeout(()=> {
    displayAlert()
   }, 1500)
   return ()=> clearTimeout(timeout)
  }, [])
  
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert;
