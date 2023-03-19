import { Home } from "../Screens/Home";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { MyTexts } from "../Screens/MyTexts";

export function PrivateRoutes() {
  return (
      <Routes>
        <Route path="/home" exact element={<Home/>}/>
        <Route path="/mytexts" exact element={<MyTexts/>}/>
      </Routes>
  )
}