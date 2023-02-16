import React from 'react'

import CategoriasNavIcon from './CategoriasNavIcon'

const CategoriasNav = () => {
  return (
    <nav className='uppercase gap-5 flex md:justify-center overflow-x-auto'>

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