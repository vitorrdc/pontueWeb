import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'

export function IndexRoutes() {
  const auth = useAuth()

  useEffect(() => {
    auth.getuserLocalStorage()
  }, [])
  console.log(auth)

  return (
    <BrowserRouter>
      {auth.user?.token ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  )
}
