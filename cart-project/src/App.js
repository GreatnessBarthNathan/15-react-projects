import React from 'react';
import Navbar from './navbar'
import CartContainer from './cartContainer';
import {useGlobalContext} from './context'
function App() {
     const {loading} = useGlobalContext()
     if (loading) {
          return <h1 className='loading'>...Loading</h1>
     }
 return <main>
      <Navbar/>
      <CartContainer/>
 </main>
}

export default App;
