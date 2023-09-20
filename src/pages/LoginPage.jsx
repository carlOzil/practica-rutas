import React from 'react'
import { useLogin } from '../hooks/useLogin'

export const LoginPage = () => {
  const { state, handleLogin, handleLogout } = useLogin()

  return (
    <>
      <h1>LoginPage</h1>
      <div>
        {
          (state === 'no-auth') ?
            (<button onClick={handleLogin}>Iniciar sesión</button>) :
            (<button onClick={handleLogout}>Cerrar sesión</button>)
        }
      </div >
    </>
  )
}
