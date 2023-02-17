import React from 'react'

import CategoriasNavIcon from './CategoriasNavIcon'

const CategoriasNav = () => {
  return (
    <nav className='flex uppercase gap-5 justify-center'>

      <CategoriasNavIcon
        image="/promociones.svg"
        content="promociones"
      />

      <CategoriasNavIcon
        image="/combos.svg"
        content="combos"
      />

      <CategoriasNavIcon
        image="/sopas.png"
        content="sopas"
      />

      <CategoriasNavIcon
        image="/a-la-carta.png"
        content="a la carta"
      />

      <CategoriasNavIcon
        image="/banquetes.svg"
        content="banquetes"
      />

      <CategoriasNavIcon
        image="/refrescos.png"
        content="refrescos"
      />

      <CategoriasNavIcon
        image="/postres.png"
        content="postres"
      />


    </nav>
  )
}

export default CategoriasNav