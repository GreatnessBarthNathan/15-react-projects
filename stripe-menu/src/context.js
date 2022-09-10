import React, {useState, useContext} from 'react'
import sublinks from './data'

const context = React.createContext()

function AppProvider ({children}) {
    const [isShowSubmenu, setIsShowSubmenu] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [submenuPosition, setSubmenuPosition] = useState({})
    const [content, setContent] = useState({page: '', links: []})

    function showSubmenu(buttonText, {buttonCenter, buttonBottom}) {
        const details = sublinks.find((detail)=> detail.page === buttonText)
        setContent(details)
        setSubmenuPosition({buttonCenter, buttonBottom})
        setIsShowSubmenu(true)
    }
    function removeSubmenu () {
        setIsShowSubmenu(false)
    }
    function showSidebar () {
        setIsSidebarOpen(true)
    }
    function removeSidebar () {
        setIsSidebarOpen(false)
    }
 
    return <context.Provider value={{isShowSubmenu, showSubmenu, removeSubmenu, submenuPosition, content, showSidebar, removeSidebar, isSidebarOpen}}>
        {children}
    </context.Provider>
}

export default AppProvider

export function useGlobalContext () {
  return useContext(context)
}