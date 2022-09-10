import React from 'react'

function reducer (state, action) {
    if (action.signal === 'CLEAR') {
        return {...state, cart: []}
    }
    if (action.signal === 'REMOVE') {
        const newCart = state.cart.filter((cartItem)=> cartItem.id !== action.message)
        return {...state, cart: newCart}
    }
    if (action.signal === 'GET-TOTALS') {
      //   let {total, amount} = state.cart.reduce((cartTotal, cartItem)=> {
      //      const values = cartItem.amount * cartItem.price
      //      cartTotal.total += values
      //      cartTotal.amount += cartItem.amount
      //      return cartTotal
      //   }, {total: 0, amount: 0})
      //  total = parseFloat(total.toFixed(2))
      let totals = state.cart.reduce((cartTotal, cartItem)=> {
        const values = cartItem.amount * cartItem.price
        cartTotal.total += values
        cartTotal.amount += cartItem.amount
        return cartTotal
      }, {total: 0, amount: 0})
      totals.total = parseFloat(totals.total.toFixed(2))
      return {...state, total: totals.total, amount: totals.amount}
    }
    if (action.signal === 'INCREASE') {
        const newCart = state.cart.map((cartItem)=> {
          if (cartItem.id === action.message) {
            cartItem.amount = cartItem.amount + 1
          }
          return cartItem
        })
        return {...state, cart: newCart}
    }
    if (action.signal === 'DECREASE') {
        const newCart = state.cart.map((cartItem)=> {
          if (cartItem.id === action.message) {
            cartItem.amount = cartItem.amount - 1
          }
          return cartItem
        }).filter((cartItem)=> cartItem.amount !== 0)
        return {...state, cart: newCart}
    }
    if (action.signal === 'LOADING') {
        return {...state, loading: true}
    }
    if (action.signal === 'GET-DATA') {
        return {...state, cart: action.message, loading: false}
    }
    return state
}

export default reducer