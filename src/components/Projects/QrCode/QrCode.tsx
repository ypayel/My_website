import React from 'react';
import "./QrCode.scss"
export const MainQr = () => {
    return (
        <>
        <div className="main-conteiner-qr">
            <div className="image-conteiner-qr">
        <img src="/images/image-qr-code.png" className="qr-code-images" alt="qr-code"/>
        </div>
        <div className="text-conteiner-qr">
        <h2 className="header-text-qr">Improve your front-end skills by building projects</h2>
        <p className="description-text-qr">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
        </div>
        </>
    )
}


export default MainQr;