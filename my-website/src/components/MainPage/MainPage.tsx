import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./MainPage.scss"
export const MainPage = () => {
    return (
        <>
        <div className="nav-menu">
            <Nav/>
        </div>
        <div className="welcome-text-conteiner">
            <h1 className="welcome-first-header">HI, I`M ARTEM</h1>
            <h2 className="welcome-second-header">I`M A JUNIOR FRONTEND DEVELOPER</h2>
            <p className="welcome-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam dolore culpa qui pariatur non dolor tenetur harum officiis?
                Et dolores corrupti illo.
                Quibusdam asperiores itaque recusandae ipsum dolorum aliquam laboriosam.</p>
                <button className="welcome-button"><Link className="welcome-button-text" to="/projects">VIEW MY PROJECTS</Link></button>
        </div>
        </>
    )
}

export default MainPage;