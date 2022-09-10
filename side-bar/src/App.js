import React, {useState} from 'react'
import Sidebar from './sideBar'
import Modal from './modal'
import Home from './home'

function App() {
 return <>
       <Home/>
       <Modal/>
       <Sidebar/>
 </>
}

export default App;
