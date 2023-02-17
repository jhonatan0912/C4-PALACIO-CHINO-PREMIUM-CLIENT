import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className='container flex justify-between items-center py-5'>
      <div>
        <img src="/logo.png" alt="logo" width={150} />
      </div>
      <nav className='flex gap-3 uppercase'>
        <ul><NavLink to={'/menu'}>menu</NavLink></ul>
        <ul><NavLink to={'/promociones'}>promociones</NavLink></ul>
        <ul><NavLink to={'/local'}>local</NavLink></ul>
        <ul><NavLink to={'/zonas-de-reparto'}>zonas de reparto</NavLink></ul>
      </nav>
      <div className='flex'>
        <NavLink to={'/login'}>Login</NavLink>
        <button>Cart</button>
      </div>
    </header>
  )
}

export default Navbar