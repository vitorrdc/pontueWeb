import { Home } from '../Screens/Home'
import { Routes, Route } from 'react-router-dom'
import { MyTexts } from '../Screens/MyTexts'

export function PrivateRoutes() {
  return (
    <Routes initialRouteName="/home">
      <Route path="/home/*" exact element={<Home />} />
      <Route path="/mytexts/*" exact element={<MyTexts />} />
    </Routes>
  )
}
