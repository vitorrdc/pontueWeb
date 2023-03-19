import { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthProvider } from '../Context/AuthProvider'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'

export function IndexRoutes() {

  const auth = useAuth()

  useEffect(() => {
    console.log(auth)
  }, [auth])

  return (
    <BrowserRouter>
    { 
      auth.token ? <PrivateRoutes /> : <PublicRoutes />
    }
    
      <PrivateRoutes />  <PublicRoutes/>
    
    </BrowserRouter>
      
)
  }