import pricing1 from '../assets/img/pricing1.png'
import pricing2 from '../assets/img/pricing2.png'
import pricing3 from '../assets/img/pricing3.png'



export default function Pricing(){
    return(
        <section class="pricing section" id="pricing">
                <div class="container">
                    <div class="section__data">
                         <h2 class="section__subtitle">Precio</h2>
                        <div class="section__titles">
                            <h1 class="section__title-border">NUESTRO</h1>
                            <h1 class="section__title">PLAN ESPECIAL</h1>
                        </div>
                    </div>
                    <div class="pricing__container grid">
                        <article class="pricing__card">
                            <header class="pricing__header">
                                <div class="pricing__shape">
                                    <img src={pricing1} alt="price image" class="pricing__img"/>
                                </div>
                                <h1 class="pricing__title">PAQUETE BASICO</h1>
                                <h2 class="pricing__number">$120</h2>
                            </header>

                            <ul class="pricing__list">
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>5 Dias a la Semana
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>01 Playera de Entrenamiento
                                </li>
                                <li class="pricing__item pricing__item-opacity">
                                    <i class="ri-checkbox-circle-line"></i>01 Bote de Proteina
                                </li>
                                <li class="pricing__item pricing__item-opacity">
                                    <i class="ri-checkbox-circle-line"></i>Acceso a Videos
                                </li>
                                <li class="pricing__item pricing__item-opacity">
                                    <i class="ri-checkbox-circle-line"></i>Entrenamiento Muscular
                                </li>
                            </ul>

                            <a href="#" class="button button__flex pricing__button buttom__buy">
                                Comprar ahora <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>

                        <article class="pricing__card pricing__card-active">
                            <header class="pricing__header">
                                <div class="pricing__shape">
                                    <img src={pricing2} alt="price image" class="pricing__img"/>
                                </div>
                                <h1 class="pricing__title pricing__title-active">PAQUETE PREMIUM</h1>
                                <h2 class="pricing__number">$240</h2>
                            </header>

                            <ul class="pricing__list">
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>5 Dias a la Semana
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>01 Playera de Entrenamiento
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>01 Bote de Proteina
                                </li>
                                <li class="pricing__item pricing__item-opacity">
                                    <i class="ri-checkbox-circle-line"></i>Acceso a Videos
                                </li>
                                <li class="pricing__item pricing__item-opacity">
                                    <i class="ri-checkbox-circle-line "></i>Entrenamiento Muscular
                                </li>
                            </ul>

                            <a href="#" class="button button__flex pricing__button buttom__buy">
                                Comprar ahora <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>

                        <article class="pricing__card">
                            <header class="pricing__header">
                                <div class="pricing__shape">
                                    <img src={pricing3} alt="price image" class="pricing__img"/>
                                </div>
                                <h1 class="pricing__title">PAQUETE DIAMANTE</h1>
                                <h2 class="pricing__number">$420</h2>
                            </header>

                            <ul class="pricing__list">
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>5 Dias a la Semana
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>01 Playera de Entrenamiento
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>01 Bote de Proteina
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>Acceso a Videos
                                </li>
                                <li class="pricing__item">
                                    <i class="ri-checkbox-circle-line"></i>Entrenamiento Muscular
                                </li>
                            </ul>

                            <a href="#" class="button button__flex pricing__button buttom__buy">
                                Comprar ahora <i class="ri-arrow-right-line"></i>
                            </a>
                        </article>

                  
                    </div>
                </div>  
            </section>
    )
}