import React, {useState, useRef, useEffect} from 'react'
import {FaBars, FaTwitter} from 'react-icons/fa'
import {links, social} from './data'

function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    const linksContainer = useRef(null)
    const linksRef = useRef(null)

    useEffect(()=> {
       if (showLinks) {
        const linksHeight = linksRef.current.getBoundingClientRect().height
        linksContainer.current.style.height = `${linksHeight}px`
       } else {
        linksContainer.current.style.height = '0px'
       }
    }, [showLinks])
   return <nav>
    <div className="logo-container">
        <h1>Coding <span>Addict</span></h1>
        <button onClick={()=> setShowLinks(!showLinks)}><FaBars/></button>
    </div>
    <div className='links-container' ref={linksContainer}>
        <ul className="links" ref={linksRef}>
            {
                links.map((link)=> {
                    const {id, url, text} = link
                    return <li key={id}>
                        <a href={url}>{text}</a>
                    </li>
                })
            }
        </ul>
    </div>
    <ul className='icons'>
        {
            social.map((icons)=> {
                const {id, url, icon} = icons
                return <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            })
        }
    </ul>
   </nav>
}

export default Navbar;
