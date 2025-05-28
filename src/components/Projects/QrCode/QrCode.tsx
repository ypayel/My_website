import React from 'react';
import "./QrCode.scss"
export const MainQr = () => {
    return (
        <>
        <div className="main-conteiner">
            <div className="image-conteiner">
        <img src="/images/image-qr-code.png" className="qr-code-images" alt="qr-code"/>
        </div>
        <div className="text-conteiner">
        <h2 className="header-text">Improve your front-end skills by building projects</h2>
        <p className="description-text">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
        </div>
        </>
    )
}


export default MainQr;