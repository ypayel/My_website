import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./MainPage.scss"
export const MainPage = () => {
    return (
        <>
            <Nav/>
        <div className="welcome-text-conteiner">
            <h1 className="welcome-first-header">HI, I`M ARTEM</h1>
            <h2 className="welcome-second-header">I`M A JUNIOR FRONTEND DEVELOPER</h2>
            <p className="welcome-text">On this page you will find some information about me and also my projects, welcome
                </p>
                <button className="welcome-button"><Link className="welcome-button-text" to="/projects">VIEW MY PROJECTS</Link></button>
        </div>
        </>
    )
}

export default MainPage;