import { Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import './Nav.scss';
export const Nav = () => {
    return (
        <>
        <div className="nav-conteiner">
            <p><Link className="link-main" to="/">Home</Link></p>
            <p><Link className="link-projects" to="/projects">Projects</Link></p>
            <p><Link className="link-about" to="/about">About</Link></p>
            <p><Link className="link-contact" to="/contact">Contact</Link></p>
            <p className="spacer">|</p>
            <a href="https://www.linkedin.com/in/artsiom-kukankou/" className="linkedIn" target="_blank"><img src="images/icons8-linkedin.svg" alt="icon" className="linkedin-icon"/></a>
            <a href="https://github.com/ypayel" className="gitHub" target="_blank"><img src="images/icons8-github.svg" alt="icon" className="github-icon"/></a>
        </div>
        </>
    )
}

export default Nav;