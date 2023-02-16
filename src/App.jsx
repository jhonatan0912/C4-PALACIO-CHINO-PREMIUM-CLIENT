import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Home from './components/pages/Home'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App