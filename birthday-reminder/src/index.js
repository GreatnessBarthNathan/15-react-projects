import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import './styles.css'



function Get () {
  return (
    <App/>
  )
}

ReactDOM.render(<Get/>, document.getElementById('root'))