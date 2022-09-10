import React, {useRef} from 'react'
import {useGlobalContext} from '../context'

function SearchForm() {
  const {setSearchTerm} = useGlobalContext()
  const searchValue = useRef('')

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit (e) {
    e.preventDefault()
  }
  React.useEffect(()=> {
   searchValue.current.focus()
  }, [])
  return (
   <section className='form-container'>
        <form className="search-form" onSubmit={handleSubmit}>
          <label htmlFor="name">search your favorite cocktail</label>
          <input type="text" id='name' ref={searchValue} onChange={searchCocktail}/>
        </form>
   </section>
  ) 
}

export default SearchForm;
