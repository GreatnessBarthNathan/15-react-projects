import React from 'react'
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'
import {useGlobalContext} from './context'

function CartItem ({id, title, price, img, amount}) {
        const {removeItem, increase, decrease} = useGlobalContext()
    return <div className='content-container'>    
        <div className="content">
            <div className="detail">
                     <img src={img} alt={title} />
                    <div >
                       <h2>{title}</h2>
                       <h3>${price}</h3>
                       <button onClick={()=> removeItem(id)}>remove</button>
                    </div>
            </div>
        <div className="button-container">
            <button onClick={()=> increase(id)}><FaAngleUp/></button>
            <h2>{amount}</h2>
            <button onClick={()=> decrease(id)}><FaAngleDown/></button>
        </div>
        </div>
    </div>
}

export default CartItem