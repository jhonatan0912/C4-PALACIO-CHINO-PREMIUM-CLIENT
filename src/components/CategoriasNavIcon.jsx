import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoriasNavIcon = ({ image, content }) => {
  return (
    <NavLink
      className='flex flex-col items-center justify-center gap-2'
      to={content == 'a la carta' ? 'a-la-carta' : content}
    >
      <img src={image} alt={content} className='icon-navbar' />
      <p>{content}</p>
    </NavLink>
  )
}

export default CategoriasNavIcon