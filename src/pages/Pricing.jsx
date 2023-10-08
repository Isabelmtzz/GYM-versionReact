import { useEffect } from 'react'
import pricing1 from '../assets/img/pricing1.png'
import pricing2 from '../assets/img/pricing2.png'
import pricing3 from '../assets/img/pricing3.png'



export default function Pricing(){
    useEffect(() =>{
        console.log("componente pricing")
      },[])
    return(
        <section className="pricing section" id="pricing">
                <div className="container">
                    <div className="section__data">
                         <h2 className="section__subtitle">Precio</h2>
                        <div className="section__titles">
                            <h1 className="section__title-border">NUESTRO</h1>
                            <h1 className="section__title">PLAN ESPECIAL</h1>
                        </div>
                    </div>
                    <div className="pricing__container grid">
                        <article className="pricing__card">
                            <header className="pricing__header">
                                <div className="pricing__shape">
                                    <img src={pricing1} alt="price image" className="pricing__img"/>
                                </div>
                                <h1 className="pricing__title">PAQUETE BASICO</h1>
                                <h2 className="pricing__number">$120</h2>
                            </header>

                            <ul className="pricing__list">
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>5 Dias a la Semana
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Playera de Entrenamiento
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>01 Bote de Proteina
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Acceso a Videos
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Entrenamiento Muscular
                                </li>
                            </ul>

                            <a href="#" className="button button__flex pricing__button buttom__buy">
                                Comprar ahora <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>

                        <article className="pricing__card pricing__card-active">
                            <header className="pricing__header">
                                <div className="pricing__shape">
                                    <img src={pricing2} alt="price image" className="pricing__img"/>
                                </div>
                                <h1 className="pricing__title pricing__title-active">PAQUETE PREMIUM</h1>
                                <h2 className="pricing__number">$240</h2>
                            </header>

                            <ul className="pricing__list">
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>5 Dias a la Semana
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Playera de Entrenamiento
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Bote de Proteina
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line"></i>Acceso a Videos
                                </li>
                                <li className="pricing__item pricing__item-opacity">
                                    <i className="ri-checkbox-circle-line "></i>Entrenamiento Muscular
                                </li>
                            </ul>

                            <a href="#" className="button button__flex pricing__button buttom__buy">
                                Comprar ahora <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>

                        <article className="pricing__card">
                            <header className="pricing__header">
                                <div className="pricing__shape">
                                    <img src={pricing3} alt="price image" className="pricing__img"/>
                                </div>
                                <h1 className="pricing__title">PAQUETE DIAMANTE</h1>
                                <h2 className="pricing__number">$420</h2>
                            </header>

                            <ul className="pricing__list">
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>5 Dias a la Semana
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Playera de Entrenamiento
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>01 Bote de Proteina
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>Acceso a Videos
                                </li>
                                <li className="pricing__item">
                                    <i className="ri-checkbox-circle-line"></i>Entrenamiento Muscular
                                </li>
                            </ul>

                            <a href="#" className="button button__flex pricing__button buttom__buy">
                                Comprar ahora <i className="ri-arrow-right-line"></i>
                            </a>
                        </article>

                  
                    </div>
                </div>  
            </section>
    )
}