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
            <div className="container">
                <div className="footer__group">
                    <ul className="footer__social">
                        <a className="footer__social-link" href="https://api.whatsapp.com/send?phone=5218120150275&text=Ta%20buena%20%20la%20pagina%20%F0%9F%91%8D" target="_blank">
                            <img className="img__social" src="https://img.icons8.com/color/48/000000/whatsapp--v4.png"/>
                        </a>

                        <a className="footer__social-link" href="https://www.tiktok.com/@isaaa_kim" target="_blank">
                            <img className="img__social" src="https://img.icons8.com/color/48/FA5252/tiktok--v1.png"/>
                        </a>
                        <a className="footer__social-link" href="https://www.instagram.com/isaaa_kim" target="_blank">
                            <img className="img__social" src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
                        </a>
                    </ul>

                    <span className="footer__copy">&#169; Copyright isaaaKim. Todos los derechos reservados</span>
                </div>
            </div>
        </footer>
    )
}