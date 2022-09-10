import React, {useState} from 'react'
import {data} from './data'
import Menu from './menu'
import Categories from './categories'

const categories = data.map((each)=> each.category)
let newCategories = new Set(categories)
newCategories = ['all', ...newCategories]

function App() {
  const [categories, setCategories] = useState(newCategories)
  const [menu, setMenu] = useState(data)
  
  function filterItems (category) {
     
    const newMenu = data.filter((item)=> {
      if (item.category === category) {
        return item
      }
  })
     setMenu(newMenu)  

       if (category === 'all') {
      setMenu(data)
      return data;
    }
  }
  return (<section>
   <div className="title">
    <h1>our menu</h1>
    <div className="line"></div>
   </div>
   <Categories categories={categories} filterItems={filterItems}/>
   <Menu menu={menu} />
  </section>
  );
}

export default App;
