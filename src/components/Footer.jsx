import logonav from '../assets/img/logo-nav.png'

export default function Footer (){
    return(

        <footer className="footer section" id="footer">
            <div className="footer__container container grid">
                <div>
                    <p className="footer__logo">
                        <img src={logonav} alt="logo nav"/> WORKOUT
                    </p>
                    <p className="footer__description">
                        Suscribete a la empresa <br/> actualizaciones a continuación.
                    </p>

                    <form action="" className="footer__form" id="contact-form">
                        <input type="email" name="user_email" placeholder="Your Email" className="footer__input" id="contact-user"/>
                        <button className="button">
                            Suscribete
                        </button>
                    </form>

                    <p className="footer__message" id="contact-message"></p>
                </div>
                <div className="footer__content">
                    <div>
                        <h3 className="footer__title">SERVICIOS</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Entrenamiento Muscular</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Entrenamiento de Cardio</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Yoga Basica</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Levatamiento de peso</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">PRECIO</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Basico</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Premium</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Diamante</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer__title">EMPRESA</h3>
                        <ul className="footer__links">
                            <li>
                                <a href="#" className="footer__link">Sobre de nosotros</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Carreras</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Clientes</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Socios</a>
                            </li>
                        </ul>
                    </div> 
                </div>
            </div>
        </footer>
    )
}