import React, { useEffect, useState } from 'react'
import axios from "axios";
import PromocionCard from './PromocionCard';

const Promociones = () => {

  const [promociones, setPromociones] = useState([])
  useEffect(() => {
    const getPromociones = async () => {
      const response = await axios('http://localhost:3000/api/promociones');
      setPromociones(response.data)
    }
    getPromociones();
  }, [])

  return (
    <div className='container'>
      <h2 className='capitalize font-bold text-3xl mb-4'>promociones</h2>
      <div className='md:grid md:grid-cols-3'>
        {
          promociones.map(promocion => promocion.hide === 0
            ? <PromocionCard promocion={promocion} key={promocion.id} />
            : null
          )
        }

      </div>
    </div>
  )
}

export default Promociones