import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer relative py-3'>
      <div className="footer__line"></div>
      <div className='grid md:grid-cols-4 capitalize p-5'>
        <div>
          <img src="/logo.png" alt="logo" width={150} />
        </div>
        <div>
          <b className='uppercase'>información</b>
          <nav className='flex flex-col gap-3'>
            <Link>nosotros</Link>
            <Link>nuestros locales</Link>
            <Link>promociones</Link>
          </nav>
        </div>
        <div>
          <b className='uppercase'>mi cuenta</b>
          <nav className='flex flex-col gap-3'>
            <Link>mis órdenes</Link>
            <Link>mis direcciones</Link>
            <Link>mi información</Link>
          </nav>
        </div>
        <div className='flex flex-col gap-3'>
          <b className='uppercase'>formas de pago</b>
          <div className='flex gap-2'>
            <img src="/visa.svg" alt="visa" width={50} />
            <img src="/mastercard.svg" alt="mastercard" width={50} />
            <img src="/american.svg" alt="american" width={50} />

          </div>
          <b className='uppercase'>siguenos</b>
          <div className='flex gap-2'>
            <Link><i className='fa fa-facebook text-3xl'></i></Link>
            <Link><i className='fa fa-instagram text-3xl'></i></Link>
          </div>
        </div>
      </div>
      <p className='text-center'>Copyright © 2022 Chifa Palacio Chino Premium - Todos los derechos reservados.</p>
    </div>
  )
}

export default Footer