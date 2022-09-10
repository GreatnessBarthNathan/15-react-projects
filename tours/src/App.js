import React, {useState, useEffect} from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  async function fetchTours() {
    setLoading(true)
    const response = await fetch(url)
    const tours = await response.json()
    setTours(tours)
    setLoading(false)
  }

  useEffect(()=> {
    fetchTours()
  }, [])

  function removeTour (id) {
   const newTours = tours.filter((tour)=> tour.id !== id)
   setTours(newTours)
  }

  if (loading) {
    return <main>
      <Loading />
    </main>
  }
  if (tours.length === 0) {
    return <main className='title'>
          <h2>no more tours</h2>
         <button onClick={()=> fetchTours()}>refresh</button>
    </main>
  }
  return (
    <Tours tours={tours} removeTour={removeTour} />
  )
}

export default App;
