import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./MainPage.scss"
import Galleria from "../Projects/Galleria/Galleria";
import { GalleriaStorage } from "../Projects/Galleria/GalleriaStorage";
export const MainPage = () => {
    return (
        <>
            <Nav/> 
            <div className="main-conteiner"> 
        <div className="welcome-text-conteiner">
            <h1 className="welcome-first-header">HI, I`M ARTEM</h1>
            <h2 className="welcome-second-header">I`M A JUNIOR FRONTEND DEVELOPER</h2>
            <p className="welcome-text">On this page you will find some information about me and also my projects, welcome
                </p>
                <button className="welcome-button"><Link className="welcome-button-text" to="/projects">VIEW MY PROJECTS</Link></button> 
                </div>
                <div className="images-container"> 
                <h3 className="images-header">My stack</h3> 
                <div className="my-stack-icons">
                    
                    <img src={process.env.PUBLIC_URL + `/images/social.png`} className="social-icon" alt="social" />
                    <img src={process.env.PUBLIC_URL + `/images/react-icon.png`} className="react-icon" alt="react" />
                    <img src={process.env.PUBLIC_URL + `/images/sass.png`} className="sass-icon" alt="sass" />
                    <img src={process.env.PUBLIC_URL + `/images/js.png`} className="js-icon" alt="js" />
                    <img src={process.env.PUBLIC_URL + `/images/html-5.png`} className="html-icon" alt="html"/>
                    <img src={process.env.PUBLIC_URL + `/images/c-sharp.png`} className="c-sharp-icon" alt="c-sharp"/>
                    <img src={process.env.PUBLIC_URL + `/images/css-3.png`} className="css-3-icon" alt="css-3" />
                 </div>  
                 </div>    
        </div>
        
        </>
    )
}

export default MainPage;