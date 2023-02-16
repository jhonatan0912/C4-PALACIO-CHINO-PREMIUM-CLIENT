import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { CartContext } from '../context/cart/CartContext';




const Navbar = () => {
  const [active, setActive] = useState(false)
  const { cartItems } = useContext(CartContext)

  return (
    <header className='container flex justify-between items-center py-5'>
      <NavLink to={'/'}>
        <img src="/logo.png" alt="logo" width={150} />
      </NavLink>
      <nav className='hidden md:flex gap-3 uppercase'>
        <ul><NavLink to={'/menu'}>menu</NavLink></ul>
        <ul><NavLink to={'/promociones'}>promociones</NavLink></ul>
        <ul><NavLink to={'/local'}>local</NavLink></ul>
        <ul><NavLink to={'/zonas-de-reparto'}>zonas de reparto</NavLink></ul>
      </nav>
      <div className='flex'>
        <NavLink to={'/login'}>
          <i className='fa fa-user text-xl'></i>
        </NavLink>
        <div className='relative'>
          <a
            className='cursor-pointer'
            onClick={() => setActive(!active)}
          >
            <i className='fa fa-shopping-cart text-xl'></i>
          </a>
          <div className={active == false ? 'hidden' : 'absolute top-6 -left-20 bg-white w-max block shadow-xl border border-black p-2 z-10'}>
            <h2 className='underline text-center'>Carrito</h2>
            {
              cartItems.length == 0
                ? <>Carrito vacío</>
                : cartItems.map(item =>
                  <div key={item.name}>
                    <span>{item.name}</span> <span>{item.price}</span>
                  </div>
                )
            }
          </div>
        </div>
      </div>
    </header >
  )
}

export default Navbar