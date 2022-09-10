import React from 'react'
import {FaEdit, FaTrash} from 'react-icons/fa'

function List({list, deleteItem, editItem}) {
  return <>
    {
      list.map(({id, desc})=> {
        return <div className="item" key={id}>
          <p>{desc}</p>
          <div className="button-container">
              <button className="edit-btn" onClick={()=> editItem(id)}><FaEdit/></button>
              <button className="delete-btn" onClick={()=> deleteItem(id)}><FaTrash/></button>
          </div>
        </div>
      })
    }
  </>
}

export default List;
