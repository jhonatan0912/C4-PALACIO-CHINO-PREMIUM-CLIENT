import React from 'react'

import CategoriasNav from '../CategoriasNav'
import Navbar from '../Navbar'
import Promociones from '../Promociones'
import Slider from '../Slider'
import Ubicacion from '../Ubicacion'

const Home = () => {
  return (
    <>
      <Slider />
      <CategoriasNav />
      <Promociones />
      <Ubicacion />
    </>
  )
}

export default Home