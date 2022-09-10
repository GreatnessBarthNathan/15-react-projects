import React, {useState, useEffect, useRef} from 'react'
import List from './list'
import Alert from './alert'

function getLocalStorage() {
  let list = localStorage.getItem('list')
  if (list) {
    return JSON.parse(list)
  } else {
    return []
  }
}

function App() {
  const inputRef = useRef(null)
  const [name, setName] = useState('')
  const [editFlag, setEditFlag] = useState(false)
  const [editID, setEditID] = useState(null)
  const [list, setList] = useState(getLocalStorage())
  const [alert, setAlert] = useState({state: true, type: '', msg: ''})

  function submitForm (e) {
    e.preventDefault()
    if (!name) {
      displayAlert(true, 'danger', 'Please add item')
      inputRef.current.focus()
    }
    if (name && editFlag) {
      const newList = list.map((item)=> { 
        if (item.id === editID) {
            return {...item, desc: name}
        }
        return item
      })
      setList(newList)
      setName('')
      setEditID(null)
      setEditFlag(false)
      displayAlert(true, 'success', 'Item edited')
      inputRef.current.focus()
    }
    if(name && !editFlag) {
      const newItem = {id: Math.random(), desc: name}
      setList([...list, newItem])
      setName('')
      displayAlert(true, 'success', 'Item added to list')
      inputRef.current.focus()
    }
  }

  function displayAlert(state=false, type='', msg='') {
    setAlert({state: state, type: type, msg: msg})
  }
  function deleteItem (id) {
    const newList = list.filter((item)=> item.id !== id)
    setList(newList)
    displayAlert(true, 'danger', 'Item deleted')
  }
  function clearItems () {
    setList([])
    displayAlert(true, 'danger', 'List cleared')
  }
function editItem (id) {
  const editedItem = list.find((item)=> item.id === id)
  setName(editedItem.desc)
  setEditFlag(true)
  setEditID(id)
  inputRef.current.focus()
}

  useEffect(()=> {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])
  
  return (
         <main className='container'>
               {alert.state && <Alert {...alert} displayAlert={displayAlert}/>} 
               <h2>grocery list app</h2>
               <form onSubmit={submitForm}>
                <input type="text" ref={inputRef} value={name} onChange={(e)=> setName(e.target.value)} placeholder='enter item'/>
                <button type='submit'>{editFlag ? 'Edit' : 'Submit'}</button>
               </form>
              {list.length > 0 && <List list={list} deleteItem={deleteItem} editItem={editItem}/>}
                {list.length > 0 && <button className='clear-btn' onClick={()=> clearItems()}>clear items</button>}
         </main>
     )
}

export default App;
