import React from 'react'
import Loading from '../components/Loading'
import {useParams, Link} from 'react-router-dom'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function SingleCocktail() {
  const {id} = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(()=> {
   setLoading(true)
   async function getCocktail () {
    try {
    const response = await fetch (`${url}${id}`)
    const data = await response.json()
    const {drinks} = data
    if (drinks) {
       const newCocktail = drinks.map((item)=> {
        const {idDrink, strDrink, strGlass, strAlcoholic, strCategory, strInstructions, strDrinkThumb, strIngredient1, strIngredient2}= item
        return {id: idDrink, name: strDrink, glass: strGlass, info: strAlcoholic, instructions: strInstructions, image: strDrinkThumb, category: strCategory, ingredients: [strIngredient1, strIngredient2]}
       })
       setCocktail(newCocktail)
    }
    else {
      setCocktail(null)
    }
    setLoading(false)
    }
    catch(error) {
      console.log(error)
      setLoading(false)
    }
   }
   getCocktail()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='no-result'>no cocktail to display</h2>
  }
  
  return <section className='single-cocktail-wrapper'>
          {
            cocktail.map((item)=> {
              const {id, name, glass, info, instructions, image, category, ingredients} = item
              return <div className="cocktail-content" key={id}>
                       <header>
                        <Link to='/'>back home</Link>
                        <h1>{name}</h1>
                       </header>
                       <section>
                            <img className= 'single-image' src={image} alt={name} />
                            <div className="description">
                              <h3> <span className='sub'>Name:</span>  <span>{name}</span></h3>
                              <h3><span className='sub'>Category: </span><span>{category}</span></h3>
                              <h3><span className='sub'>Info: </span><span>{info}</span></h3>
                              <h3><span className='sub'>Glass: </span><span>{glass}</span></h3>
                              <h3><span className='sub'>Instructions: </span><span>{instructions}</span></h3>
                              <h3><span className='sub'>Ingredients: </span> {ingredients.map((ingredient, index)=> {
                                   return <span className='ingredient' key={index}>{ingredient}</span>
                              })
                              }</h3>
                            </div>
                       </section>
              </div>
            })
          }
  </section>
}

export default SingleCocktail;
