import React, {useState, useRef, useEffect} from 'react'
import sublinks from './data'
import {useGlobalContext} from './context'

function Submenu () {
   const {isShowSubmenu, submenuPosition, content} = useGlobalContext()
   const {buttonCenter, buttonBottom} = submenuPosition
   const [columns, setColumns] = useState('')
   const {page, links} = content

   const submenu = useRef(null)
   useEffect(()=> {
      if (links.length === 3) {
         setColumns('col-3')
      }
      if (links.length > 3) {
         setColumns('col-4')
      }
      else {setColumns('col-2')}
      
       submenu.current.style.left = `${buttonCenter}px`
       submenu.current.style.top = `${buttonBottom}px`
   }, [submenuPosition])

   return <div className={`${isShowSubmenu && 'submenu'}`} ref={submenu}>
             <h4>{page}</h4>
             <ul className={`links ${columns}`}>
               {
                 links.map((link, index)=> {
                  const {label, icon, url} = link
                  return <li key={index}><a className='sublink' href={url}>{icon}{label}</a></li>
                 })
               }
             </ul>
          </div>
}

export default Submenu