import React, {useState, useEffect, useContext, useReducer, useCallback} from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const context = React.createContext()

function AppProvider ({children}) {
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('a')
  const [cocktails, setCocktails] = useState([])

 const fetchDrinks = useCallback(async () => {
    setLoading(true)
    try {
     const response = await fetch(`${url}${searchTerm}`)
     const data = await response.json()
     const {drinks} = data
     if (drinks) {
      const newCocktails = drinks.map((item)=> {
        const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass} = item
        return {id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlcoholic, glass: strGlass}
      })
      setCocktails(newCocktails)
     }
     else{
      setCocktails([])
     }
      setLoading(false)
    } catch(error) {
      console.log(error)
      setLoading(false)
    }
  }, [searchTerm])

  useEffect(()=> {
      fetchDrinks()
  }, [searchTerm, fetchDrinks])

  return <context.Provider value={{loading, cocktails, setSearchTerm}}>
    {children}
  </context.Provider>
}

export default AppProvider

export function useGlobalContext () {
  return useContext(context)
}
