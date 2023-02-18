import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col gap-4 md:w-4/12 m-auto shadow-2xl rounded-lg p-10 md:my-24'>

      <b className='text-center capitalize md:text-2xl'>bienvenido</b>
      <label htmlFor="email">
        <p>correo electronico</p>
        <input type="text" placeholder='abc@abc.com' id='email' className='bg-zinc-300 p-2 w-full rounded-lg' />
      </label>
      <label htmlFor="password">
        <p>contraseña</p>
        <input type="password" placeholder='************' id='password' className='bg-zinc-300 p-2 w-full rounded-lg' />
      </label>
      <button className='red p-3 rounded-lg uppercase font-bold'>iniciar sesión</button>


    </div>
  )
}

export default Login