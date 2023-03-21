import { Home } from "../Screens/Home";
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { MyTexts } from "../Screens/MyTexts";
import {TextsView} from "../Screens/TextsView"

export function PrivateRoutes() {
  return (
    <Routes initialRouteName='/home' >
    <Route path="/home" exact element={<Home/>} />
    <Route path="/mytexts" exact  element={<MyTexts/>}/>
    <Route path="/text/:id" exact element={<TextsView />} />
      </Routes>
  )
}