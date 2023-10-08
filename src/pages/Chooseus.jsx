import chooseimg from '../assets/img/choose-img.png'

export default function ChooseUs(){
    return(
        <section className="choose section" id="choose">
                <div className="choose__overflow">
                    <div className="choose__container container grid">

                        <div className="choose__content">

                        <div className="section__data">
                            <h2 className="section__subtitle">Best Reason</h2>
                            <div className="section__titles">
                                <h1 className="section__title-border">¿WHY?</h1>
                                <h1 className="section__title">CHOOSE US?</h1>
                            </div>
                            <p className="choose__description">Choose your favorite className and start now. Remember the 
                                only bad workout is the one you didn't do.</p>

                            <div className="choose__data">
                                <div className="choose__group">
                                    <h3 className="choose__number">200+</h3>
                                    <p className="choose__subtitle">Total Members</p>
                                </div>
                                <div className="choose__group">
                                    <h3 className="choose__number">50+</h3>
                                    <p className="choose__subtitle">Best trainers</p>
                                </div>
                                <div className="choose__group">
                                    <h3 className="choose__number">25+</h3>
                                    <p className="choose__subtitle">Programs</p>
                                </div>
                                <div className="choose__group">
                                    <h3 className="choose__number">100+</h3>
                                    <p className="choose__subtitle">Awards</p>
                                </div>
                            </div>
                         </div>
                        </div>

                        <div className="choose__images">
                            <img src={chooseimg} alt="" className="choose__img"/>
                            <div className="choose__triangle choose__triangle-1"></div>
                            <div className="choose__triangle choose__triangle-2"></div>
                            <div className="choose__triangle choose__triangle-3"></div>
                        </div>
                    </div>
                </div>
            </section>
    )
}