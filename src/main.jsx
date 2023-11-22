import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Cartprovider } from './Stores/context/Cartcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
   
  <React.StrictMode>
     <Cartprovider>
       <App />
     </Cartprovider>
  </React.StrictMode>
   
   
)
