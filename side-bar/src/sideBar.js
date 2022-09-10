import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {links, social} from './data'
import {useGlobalContext} from './context'


function Sidebar () {
    const {isShowSidebar, removeSidebar} = useGlobalContext()
    return <aside className={`side-bar ${isShowSidebar && 'show-sidebar'}`}>
        <div className="header">
            <h1>Coding <span>Addict</span></h1>
            <button onClick={removeSidebar}><FaTimes/></button>
        </div>
            <ul className='links-container'>
               {links.map((link)=> {
                const {id, url, icon, text} = link
                return <li key={id}>
                    <a href={url}>{icon}{text}</a>
                </li>
               })}
            </ul>
            <ul className='social'>
                {social.map((icons)=> {
                    const {id, url, icon} = icons
                    return <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                })}
            </ul>
    </aside>
}

export default Sidebar