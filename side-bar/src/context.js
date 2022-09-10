import React, {useState, useContext} from 'react'

const context = React.createContext()

function AppProvider ({children}) {
    const [isShowModal, setIsShowModal] = useState(false)
    const [isShowSidebar, setIsShowSidebar] = useState(false)

    function showModal() {
        setIsShowModal(true)
    }
    function removeModal () {
     setIsShowModal(false)
    }
    function showSidebar() {
        setIsShowSidebar(true)
    }
    function removeSidebar () {
        setIsShowSidebar(false)
    }
return <context.Provider value={{isShowModal, isShowSidebar, showModal, removeModal, showSidebar, removeSidebar}}>
    {children}
</context.Provider>
}

export function useGlobalContext () {
    return useContext(context)
}

export default AppProvider