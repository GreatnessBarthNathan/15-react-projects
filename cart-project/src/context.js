import React, {useState, useContext, useReducer, useEffect} from 'react'
import reducer from './reducer'
import {cartItems} from './data'
const url = 'https://course-api.com/react-useReducer-cart-project'

const context = React.createContext()

const defaultState = {
    cart: cartItems,
    total: 0,
    amount: 0,
    loading: false,
}


function AppProvider ({children}) {
    const [state, dispatch] = useReducer(reducer, defaultState)

    function clearCart () {
        dispatch({signal: 'CLEAR'})
    }
    function removeItem (id) {
        dispatch({signal: 'REMOVE', message: id})
    }
   function increase (id) {
    dispatch({signal: 'INCREASE', message: id})
   }
   function decrease (id) {
    dispatch({signal: 'DECREASE', message: id})
   }
   async function fetchData () {
    dispatch({signal: 'LOADING'})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({signal: 'GET-DATA', message: cart})
   }
   useEffect(()=> {
      fetchData()
   }, [])
    useEffect(()=> {
        dispatch({signal: 'GET-TOTALS'})
    }, [state.cart])
    return <context.Provider value={{...state, increase, decrease, clearCart, removeItem}}>
        {children}
    </context.Provider>
}

export default AppProvider

export function useGlobalContext () {
    return useContext(context)
}

