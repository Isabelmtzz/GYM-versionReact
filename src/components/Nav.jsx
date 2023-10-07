import logo from '../assets/img/logo-nav.png'
import { useNavigate } from 'react-router-dom'

export default function Nav(){
    const navigate = useNavigate()
    return(
      <header className="header" id="header">
              <nav className="nav container">
                  <a href="#" className="nav__logo">
                      <img className="nav__logo-img" src={logo} alt="logo"/> BETOROT
                  </a>
                  <div className="nav__menu" id="nav-menu">
                      <ul className="nav__list">
                          <li className="nav__item" onClick={()=> navigate("/")}>
                              Inicio
                          </li>
                          <li className="nav__item" onClick={()=> navigate("/programa")}>
                              Programa
                          </li>
                          <li className="nav__item" onClick={()=> navigate("/eligenos")}>
                              Eligenos
                          </li>
                          <li className="nav__item" onClick={()=> navigate("/precio")}>
                              Precio
                          </li>
                          <div className="nav__link">
                              <a href="#footer" className="button nav__button">Register Now</a>
                          </div>
                      </ul>
                      <div className="nav__close" id="nav-close">
                          <i className="ri-close-line"></i>
                      </div>
                  </div>
                  <div className="nav__toggle" id="nav-toggle">
                      <i className="ri-menu-3-line"></i>
                  </div>
              </nav>
          </header>
    )
  }