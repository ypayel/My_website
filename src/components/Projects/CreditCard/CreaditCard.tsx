import React, { useState } from "react";
import './CreditCard.scss';
import Nav from "../../Nav/Nav";
export const CreditCard = () => {
    const [cardName, setCardName] = useState("e.g. Jane Appleseed");
    const [cardNumber, setCardNumber] = useState("e.g. 1234 5678 9123 0000");
    const [expMonth, setExpMonth] = useState("MM");
    const [expYear, setExpYear] = useState("YY");
    const [cvc, setCvc] = useState("e.g. 123");

    return (
        <>
            <div className="main-conteiner-content">
                <Nav/>
                <div className="creditCard-container" >
                <div className="background-card">
                    <img src={process.env.PUBLIC_URL + "/images/bg-main-desktop.png"} alt="background-image" className="background-image" />
                    <div className="front-card">
                        <img src={process.env.PUBLIC_URL + "/images/bg-card-front.png"} alt="card" className="front-card-image" />
                        <h4 className="number-front">{cardNumber}</h4>
                        <h4 className="name">{cardName}</h4>
                        <h4 className="mounth-card">{expMonth}/{expYear}</h4>
                    </div>
                    <div className="back-card">
                        <img src={process.env.PUBLIC_URL + '/images/bg-card-back.png'} alt="card" className="back-card-image" />
                        <h4 className="cvc-card">{cvc}</h4>
                    </div>
                    <div className="form-conteiner">
                        <form className="card-form">
                            <div className="inputs-button">
                                <div className="name-input">
                                    <label htmlFor="first-input">
                                        <p className="card-name">CARDHOLDER NAME</p>
                                        <input
                                            type="text"
                                            value={cardName}
                                            onChange={(e) => setCardName(e.target.value)}
                                            className="first-input"
                                        />
                                    </label>
                                </div>
                                <div className="card-number-input">
                                    <p className="card-number">CARD NUMBER</p>
                                    <label htmlFor="second-input">
                                        <input
                                            type="text"
                                            value={cardNumber}
                                            onChange={(e) => setCardNumber(e.target.value)}
                                            className="second-input"
                                            maxLength={16}
                                        />
                                    </label>
                                </div>
                                <div className="data-input">
                                    <p className="data">EXP. DATE (MM/YY)</p>
                                    <label htmlFor="third-input">
                                        <input
                                            type="text"
                                            value={expMonth}
                                            onChange={(e) => setExpMonth(e.target.value)}
                                            className="third-input"
                                            maxLength={2}
                                        />
                                    </label>
                                    <label htmlFor="four-input">
                                        <input
                                            type="text"
                                            value={expYear}
                                            onChange={(e) => setExpYear(e.target.value)}
                                            className="four-input"
                                            maxLength={4}
                                        />
                                    </label>
                                </div>
                                <div className="cvc-input">
                                    <p className="cvc">CVC</p>
                                    <label htmlFor="five-input">
                                        <input
                                            type="text"
                                            value={cvc}
                                            onChange={(e) => setCvc(e.target.value)}
                                            className="five-input"
                                            maxLength={3}
                                        />
                                    </label>
                                </div>
                                <div className="button-confirm">
                                    <button className="confirm">Confirm</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}

export default CreditCard;
