import { useState, useEffect } from 'react'
import { AuthProvider } from './Context/AuthProvider'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { ProtectedLayout } from './Components/ProtectedLayout'
import { LoginScreen } from './Screens/Login'
import { Home } from './Screens/Home'
import { IndexRoutes } from './routes/index.routes'


function App() {

  return (
    <AuthProvider>
      <IndexRoutes />
    </AuthProvider>


  )
}

export default App
