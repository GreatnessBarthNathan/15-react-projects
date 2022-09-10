import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import {useGlobalContext} from '../context'


function CocktailList() {
  const {cocktails, loading} = useGlobalContext()

  if (loading) {
    return <Loading/>
  }
  if (cocktails.length < 1) {
  return  <h2 className='no-result'>no cocktails matched your search criteria</h2>
  }
  return <section className='wrapper'>
    <h2 className='heading'>cocktails</h2>
    <div className="cocktails-container">
      {cocktails.map((item)=> {
          return <Cocktail key={item.id} {...item}/>
      })}
    </div>
  </section>
}

export default CocktailList;