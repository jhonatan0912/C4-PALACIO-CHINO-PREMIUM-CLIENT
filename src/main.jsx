import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CartContextProvider } from './context/cart/CartProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <CartContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </CartContextProvider>
)
