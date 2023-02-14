import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../context/cart/CartContext';

const PromocionCard = ({ promocion }) => {
  const { cartItems, setCartItems } = useContext(CartContext)

  return (
    <div className='relative'>
      <img src={promocion.imageURL} alt={promocion.name} className="rounded-lg" />
      <button
        className='absolute bottom-2 left-4 px-5 py-2 bg-red-600 text-white font-bold active:scale-95 rounded-lg'
        onClick={() => setCartItems([...cartItems, { name: promocion.name, price: promocion.price }])}
      >ORDENAR</button>
    </div >
  )
}

export default PromocionCard