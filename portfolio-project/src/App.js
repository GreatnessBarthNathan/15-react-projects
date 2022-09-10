import React, {useState, useEffect} from 'react'
import Jobs from './jobs'

function App() {
  return (
    <>
    <div className="title">
      <h1>experience</h1>
      <div className="line"></div>
    </div>
    <Jobs />
    <div className="more-info"><button>more info</button></div>

    </>
  );
}

export default App;
