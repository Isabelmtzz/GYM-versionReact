import home from '../assets/img/home-img.png'
import logo1 from '../assets/img/logo1.png'
import logo2 from "../assets/img/logo2.png"
import logo3 from "../assets/img/logo3.png"
import logo4 from "../assets/img/logo4.png"
import calculateimg from '../assets/img/calculate-img.png'
import { useEffect, useState } from 'react'

export default function Home(){

    const [error, setError] = useState(false);
    const [calculateForm, setCalculateForm] = useState({
        calculateCm: "",
        calculateKg: "",
        calculateMessage: ""
    })

    console.log(calculateForm)

    function onSubmit(e){
        e.preventDefault()

        if(calculateForm.calculateCm.trim() === "" || calculateForm.calculateKg.trim() === ""){
            setError(true);
            setCalculateForm({
                ...calculateForm,
                calculateMessage: "Agrega tu peso y estatura 🖍️"
            })
            return
        } 
        
            setError(false);
            let message;
            const cm = calculateForm.calculateCm / 100,
                  kg = calculateForm.calculateKg,
                  imc = (kg / (cm * cm)).toFixed(2)

            if(imc < 18.5){
                setError(true);
                message = `Tu IMC es ${imc} y estas muy delgado 😔`
            }

            if(imc > 18.5 && imc < 25){
                setError(false);
                message = `Tu IMC es ${imc} y estas saludable 😀`
            }

            if(imc >= 25){
                setError(true);
                message = `Tu IMC es ${imc} y estas pasadito de peso 😬`
            }
            console.log('MENSAJE: ', message);
            setCalculateForm({
                calculateCm:'',
                calculateKg:'',
                calculateMessage: message
            })

    }

    // useEffect(()=>{
    //     /*=============== CALCULATE JS ===============*/
    //         const calculateForm = document.getElementById("calculate-form"),
    //         calculateCm = document.getElementById("calculate-cm"),
    //         calculateKg = document.getElementById("calculate-kg"),
    //         calculateMessage = document.getElementById("calculate-message")

    //         const calculateIMC = (e) => {
    //         e.preventDefault()
    //         //Check if the value is empty 

    //         if(calculateCm.value === "" || calculateKg.value === ""){
    //         // Add and remove color
    //         calculateMessage.classList.remove("color-green")
    //         calculateMessage.classList.add("color-red")
    //         // Show message
    //         calculateMessage.textContent = "Agrega tu peso y estatura 👨‍💻"

    //         //Remove message in 3 seconds
    //         setTimeout(() =>{
    //             calculateMessage.textContent = ""
    //         }, 3000)
    //         }else{
    //         //IMC FORMULA
    //         const cm = calculateCm.value / 100,
    //                 kg = calculateKg.value,
    //                 imc = (kg / (cm * cm)).toFixed(2)

    //         // SHOW HEALTH STATUS

    //         if(imc < 18.5){
    //             calculateMessage.classList.add("color-red")
    //             calculateMessage.textContent = `Tu IMC es ${imc} y estas muy delgado 😔`
    //         }

    //         if(imc > 18.5 && imc < 25){
    //             calculateMessage.classList.add("color-green")
    //             calculateMessage.textContent = `Tu IMC es ${imc} y estas saludable 😀`
    //         }

    //         if(imc >= 25){
    //             calculateMessage.classList.add("color-red")
    //             calculateMessage.textContent = `Tu IMC es ${imc} y estas pasadito de peso 😬`
    //         }

    //         calculateCm.value = ""
    //         calculateKg.value = ""

    //         setTimeout(() => {
    //             calculateMessage.textContent = ""
    //         }, 6000)

            
    //         }
    //         }

    //         calculateForm.addEventListener("submit", calculateIMC)
    // },[])



    return(

        <>
        <main className="main" >
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

                        <form onSubmit={onSubmit} className="calculate__form" id="calculate-form">
                            <div className="calculate__box">
                                <input 
                                    value={calculateForm.calculateCm}
                                    name="Altura" 
                                    type="number" 
                                    placeholder="Estatura" 
                                    className="calculate__input" 
                                    id="calculate-cm"
                                    onChange={(e) => {
                                        console.log('ESTE ES EL EVENTO', e.target.value)
                                        setCalculateForm({
                                            ...calculateForm,
                                            calculateCm: e.target.value
                                        })
                                    }}
                                
                                />
                                <label htmlFor="calculate-cm" className="calculate__label">cm</label> 
                            </div>
                            <div className="calculate__box">
                                <input 
                                    value={calculateForm.calculateKg}

                                    name='Peso' 
                                    type="number" 
                                    placeholder="Peso" 
                                    className="calculate__input" 
                                    id="calculate-kg"
                                    onChange={(e) => {
                                        console.log('ESTE ES EL EVENTO', e.target.value)
                                        setCalculateForm({
                                            ...calculateForm,
                                            calculateKg: e.target.value
                                        })
                                    }}
                                />
                                <label htmlFor='calculate-kg' className="calculate__label">kg</label> 
                            </div>

                            <button type="submit" className="button button__flex">
                                CALCULA <i className="ri-arrow-right-line"></i>
                            </button>
                        </form>
                       <p className={`${error ? 'calculate-message-error' : 'calculate-message' }` } > {calculateForm.calculateMessage}</p>
                    </div>
                    <img src={calculateimg} alt="calculate image" className="calculate__img"/>
                </div>
            </section>
        </main>
        </>
    )
}