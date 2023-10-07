import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Programs from './pages/Programs'
import ChooseUs from './pages/Chooseus'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/programa' element={<Programs/>}/>
      <Route path='/eligenos' element={<ChooseUs/>}/>
      <Route path='/precio' element={<Pricing/>}/>

    </Routes>

    <Footer/>
      </>
  )
}

export default App

