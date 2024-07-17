import { Link } from "react-router-dom";
import MainPage from "../MainPage/MainPage";

export const Nav = () => {
    return (
        <>
        <div className="nav-conteiner">
            <p><Link to="/main">Home</Link></p>
            <p><Link to="/projects">Projects</Link></p>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            <p>|</p>
            <a href="https://www.linkedin.com/in/artsiom-kukankou/" className="linkedIn"><img src="images/linkedin.svg" alt="icon"/></a>
            <a href="https://github.com/ypayel" className="gitHub"><img src="images/git.svg" alt="icon" /></a>
        </div>
        </>
    )
}

export default Nav;