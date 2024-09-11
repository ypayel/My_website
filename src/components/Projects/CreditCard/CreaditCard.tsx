import "./CreditCard.scss"
export const CreditCard = () => {
    return (
        <>
            <div className="main-conteiner-content">
                <div className="background">
                    <img src="images/bg-main-desktop.png" alt="background-image" className="background-image" />
                    <div className="front-card">
                        <img src="./images/bg-card-front.png" alt="card" className="front-card-image" />
                        <h4 className="number-front">0000000000000000</h4>
                        <h4 className="name">Jane Appleseed</h4>
                        <h4 className="mounth-card">00/00</h4>
                    </div>
                    <div className="back-card">
                        <img src="images/bg-card-back.png" alt="card" className="back-card-image" />
                        <h4 className="cvc-card">000</h4>
                    </div>
                </div>
                <div className="form-conteiner">
                    <form className="card-form">
                        <div className="inputs-button">
                            <div className="name-input">
                                <label htmlFor="first-input">
                                    <p className="card-name">CARDHOLDER NAME</p>
                                    <input type="text" value="e.g. Jane Applessed" className="first-input" />
                                </label>
                            </div>
                            <div className="card-number-input">
                                <p className="card-number">CARD NUMBER</p>
                                <label htmlFor="second-input">
                                    <input type="text" value="e.g. 1234 5678 9123 0000" className="second-input" maxLength={16} />
                                </label>
                            </div>
                            <div className="data-input">
                                <p className="data">EXP. DATE (MM/YY)</p>
                                <label htmlFor="third-input">
                                    <input type="text" value="MM" className="third-input" maxLength={2} />
                                </label>
                                <label htmlFor="four-input">
                                    <input type="text" value="YY" className="four-input" maxLength={4} />
                                </label>
                            </div>
                            <div className="cvc-input">
                                <p className="cvc">CVC</p>
                                <label htmlFor="five-input">
                                    <input type="text" value="e.g. 123" className="five-input" maxLength={3} />
                                </label>
                            </div>
                        </div>
                        <div className="button-confirm">
                            <button className="confirm">Confirm</button>
                        </div>
                    </form>
                </div>
                <div className="footer-conteiner">
                    <div className="attribution">
                        Coded by <a href="https://github.com/ypayel">ypayel</a>.
                    </div>
                </div>
            </div>

        </>
    )
}

export default CreditCard;