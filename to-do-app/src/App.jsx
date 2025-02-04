import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {

  return (
    <>
    

    <BrowserRouter>
    <Routes>
      <Route path='/dashboard' element={<Home/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>

    </BrowserRouter>
    <Home/>
    
    </>
    
  )
}

export default App
