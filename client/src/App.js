import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './components/home'
import Create from './components/create'
import { div } from 'simple-calculator-shrinathfulpati'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
