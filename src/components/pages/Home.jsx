import React from 'react'

import CategoriasNav from '../CategoriasNav'
import Navbar from '../Navbar'
import Promociones from '../Promociones'
import Slider from '../Slider'

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <CategoriasNav />
      <Promociones />
    </>
  )
}

export default Home