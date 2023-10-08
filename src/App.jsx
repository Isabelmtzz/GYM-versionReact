import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './components/Nav'
import Programs from './pages/Programs'
import ChooseUs from './pages/Chooseus'
import Pricing from './pages/Pricing'
import Footer from './components/Footer'
import ScrollReveal from 'scrollreveal'


function App() {
  useEffect(()=>{
    /*=============== SHOW MENU ========``=======*/

const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")


/*=============== MENU SHOW===============*/
if(navToggle){
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu")
})
}
/*=============== MENU SHOW===============*/

if(navClose){
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu")
})
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav__link")

const linkAction = () => {
const navMenu = document.getElementById("nav-menu")
navMenu.classList.remove("show-menu")
}

navLink.forEach(e => e.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header")
  //console.log(this)
  this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header")
}

window.addEventListener("scroll", scrollHeader)

  },[] )

  console.log('ESTO ES EL OBJECTO GLOBAL WINDOW', window);

  useEffect(()=>{
    /*=============== SCROLL REVEAL ANIMATION ===============*/
  const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration: 2500,
  delay: 400,
  })

  sr.reveal(`.home__data, .footer__container`)
  sr.reveal(`.home__img`, {delay: 700, origin: 'bottom'})
  sr.reveal(`.logos__img, .program__card, .pricing__card`,{interval: 100})
  sr.reveal(`.choose__img, .calculate__content`, {origin: 'left'})
  sr.reveal(`.choose__content, .calculate__img`, {origin: 'right'})

  },[])
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

