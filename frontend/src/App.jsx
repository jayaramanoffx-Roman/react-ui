import React from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Home from './Components/Home'
import Page2 from './Components/Page2'
import './App.css'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Collections' element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
