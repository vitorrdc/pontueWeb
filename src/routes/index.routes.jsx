import { useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { AuthProvider } from '../Context/AuthProvider'
import { useAuth } from '../Context/AuthProvider/useAuth'
import { PrivateRoutes } from './private.routes'
import { PublicRoutes } from './public.routes'

export function IndexRoutes() {


  const auth = useAuth()

  
  return (
    <BrowserRouter>
    
     {
      auth.user?.token ? <PrivateRoutes /> : <PublicRoutes />
     }
     
    
    </BrowserRouter>  
)
  }