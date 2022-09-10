import React from 'react';
import CartItem from './cartItem'
import {useGlobalContext} from './context'

function CartContainer () {
    const {cart, total, clearCart} = useGlobalContext()

    if (cart.length === 0 ) {
       return <div className="empty">
        <h1>your bag</h1>
        <p>is currently empty</p>
       </div>
    }
 return <section className='cart-container'>
    <h1>your bag</h1>
    <div className="cart">
        {cart.map((items, index)=> {
          return <CartItem key={index} {...items}/>
        })}
    </div>
    <hr />
    <footer>
        <div className="total">
             <h3>Total</h3>
             <h3>${total}</h3>
        </div>
       <button onClick={()=> clearCart()}>clear cart</button>
    </footer>
 </section>
}

export default CartContainer;
