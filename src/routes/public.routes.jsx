import { LoginScreen } from '../Screens/Login'
import { Routes, Route } from 'react-router-dom'

export function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" exact element={<LoginScreen />} />
    </Routes>
  )
}
