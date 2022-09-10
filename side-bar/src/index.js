import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App from './App';
import AppProvider from './context'

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index () {
  return <AppProvider>
    <App/>
  </AppProvider>
}
root.render(<Index />);


