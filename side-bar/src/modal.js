import React from 'react'
import {FaTimes} from 'react-icons/fa'
import {useGlobalContext} from './context'

function Modal () {
    const {isShowModal, removeModal}= useGlobalContext()
    return <div className={`modal-continer ${isShowModal && 'show-modal'}`}>
        <div className="modal-content">
            <h2>modal content</h2>
            <button className="close-modal" onClick={removeModal}><FaTimes/></button>
        </div>
    </div>
}

export default Modal