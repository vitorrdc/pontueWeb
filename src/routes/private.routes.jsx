import { Home } from '../Screens/Home'
import { Routes, Route } from 'react-router-dom'
import { MyTexts } from '../Screens/MyTexts'
import { SubmitText } from '../Screens/SubmitText'

export function PrivateRoutes() {
  return (
    <Routes initialRouteName="/home">
      <Route path="/home/*" exact element={<Home />} />
      <Route path="/mytexts/*" exact element={<MyTexts />} />
      <Route path="/submitTexts/*" exact element={<SubmitText />} />
    </Routes>
  )
}
