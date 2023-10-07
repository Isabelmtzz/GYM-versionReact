import program1 from '../assets/img/program1.png'
import program2 from '../assets/img/program2.png'
import program3 from '../assets/img/program3.png'
import program4 from '../assets/img/program4.png'


export default function Programs (){
    return(
        <section className="program section" id="program">
                <div className="container">
                    <div className="section__data">
                        <h2 className="section__subtitle">Our Program</h2>
                        <div className="section__tittle">
                            <h1 className="section__title-border">BUILD YOUR</h1>
                            <h1 className="section__title">BEST BODY</h1>
                        </div>
                    </div>

                    <div className="program__container grid">
                        <articule className="program__card">
                            <div className="program__shape">
                                <img src={program1} alt="program image" className="program__img"/>
                            </div>

                            <h3 className="program__title">Flex Muscle</h3>

                            <p className="program__description">
                                Creating tension that's temporarily making the Muscle
                                fibers smaller or contracted  
                            </p>

                            <a href="#" className="program__button">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </articule>
                        <articule className="program__card">
                            <div className="program__shape">
                                <img src={program2} alt="program image" className="program__img"/>
                            </div>

                            <h3 className="program__title">Cardio Exercise</h3>

                            <p className="program__description">
                                Exercise your heart rate up and keeps it 
                                up for a prolonged period of time.
                            </p>

                            <a href="#" className="program__button">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </articule>

                        <articule className="program__card">
                            <div className="program__shape">
                                <img src={program3} alt="program image" className="program__img"/>
                            </div>

                            <h3 className="program__title">Basic Yoga</h3>

                            <p className="program__description">
                                Diaphragmatic this is the most common breathing 
                                technique you'll find in yoga
                            </p>

                            <a href="#" className="program__button">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </articule>

                        <articule className="program__card">
                            <div className="program__shape">
                                <img src={program4} alt="program image" className="program__img"/>
                            </div>

                            <h3 className="program__title">Weight Lifting</h3>

                            <p className="program__description">
                                Attempts a maximum weight single lift of a 
                                barbell loaded with weight plates.
                            </p>

                            <a href="#" className="program__button">
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </articule>
                        
                    </div>
                </div>
            </section>
    )
}