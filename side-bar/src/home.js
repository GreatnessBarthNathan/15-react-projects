import React from 'react'
import {FaBars} from 'react-icons/fa'
import {useGlobalContext} from './context'

function Home () {
    const {showModal, showSidebar} = useGlobalContext()
    return <div className='home'>
        <button className="toggle-btn" onClick={showSidebar}><FaBars/></button>
        <button className="modal-btn" onClick={showModal}>Show Modal</button>
    </div>
}

export default Home