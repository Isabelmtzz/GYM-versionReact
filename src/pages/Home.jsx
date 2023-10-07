import home from '../assets/img/home-img.png'
import logo1 from '../assets/img/logo1.png'
import logo2 from"../assets/img/logo2.png"
import logo3 from"../assets/img/logo3.png"
import logo4 from"../assets/img/logo4.png"


export default function Home(){
    return(
        <>
        <main className="main">
            <section className="home section" id="home">
                <div className="home__container container grid">
                    <div className="home__data">
                        <h2 className="home__subtitle">MAKE YOUR</h2>
                        <h1 className="home__title">BODY SHAPE</h1>
                        <p className="home__description">
                            In here we will help you to shape and build your ideal 
                            body and live your life to the fullest.
                        </p>
                        <a href="#" className="button__flex button">
                            Get Started <i className="ri-arrow-right-line"></i>
                        </a>
                    </div>

                    <div className="home__images">
                        <img src={home} alt="home image" className="home__img"/>
                        <div className="home__triangle home__triangle-3"></div>
                        <div className="home__triangle home__triangle-2"></div>
                        <div className="home__triangle home__triangle-1"></div>
                    </div>
                </div>
            </section>

            <section className="logos section">
                <div className="logos__container container grid">
                    <img src={logo1} alt="logo image" className="logos__img"/>
                    <img src={logo2} alt="logo image" className="logos__img"/>
                    <img src={logo3} alt="logo image" className="logos__img"/>
                    <img src={logo4} alt="logo image" className="logos__img"/>

                </div>
            </section>

            <section className="calculate section">
                <div className="calculate__container container grid">
                    <div className="calculate__content">
                        <div className="section__titles">
                            <h1 className="section__title-border">CALCULAR</h1>
                            <h1 className="section__title">TU IMC</h1>
                        </div>

                        <p className="calculate__description">La calculadora de indice de masa corporal (IMC),
                            calcula el indice de tu masa corporal mediante tu peso y estatura.
                        </p>

                        <form action="" className="calculate__form" id="calculate-form">
                            <div className="calculate__box">
                                <input type="number" placeholder="Estatura" className="calculate__input" id="calculate-cm"/>
                                <label for="" className="calculate__label">cm</label> 
                            </div>
                            <div className="calculate__box">
                                <input type="number" placeholder="Peso" className="calculate__input" id="calculate-kg"/>
                                <label for="" className="calculate__label">kg</label> 
                            </div>

                            <button type="submit" className="button button__flex">
                                CALCULA <i className="ri-arrow-right-line"></i>
                            </button>
                        </form>
                       <p className="calculate__message" id="calculate-message"></p>
                    </div>
                    <img src="./../assets/img/calculate-img.png" alt="calculate image" className="calculate__img"/>
                </div>
            </section>
        </main>
        </>
    )
}