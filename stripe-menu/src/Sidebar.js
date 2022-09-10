import React from 'react'
import {FaTimes} from 'react-icons/fa'
import sublinks from './data'
import {useGlobalContext} from './context'

function Sidebar () {
    const {isSidebarOpen, removeSidebar} = useGlobalContext()
    return <aside className={`${isSidebarOpen ? 'side-bar-container' : 'close-sidebar'}`}>
           <div className="side-bar">
            <button onClick={removeSidebar}><FaTimes/></button>
            {
               sublinks.map((sub, index)=> {
                const {page, links} = sub
                return <div key={index}>
                    <h4>{page}</h4>
                    <ul>
                        {
                           links.map((link, index)=> {
                            const {label, icon, url} = link
                            return <li key={index}>
                                <a href={url}>{icon}{label}</a>
                            </li>
                           })
                        }
                    </ul>
                </div>
               })
            }
           </div>
           </aside>

}

export default Sidebar