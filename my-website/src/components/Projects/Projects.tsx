import "./Projects.scss"
import BookStore from "./BookStore/BookStore";
import App from "./BookStore/BookStore";
import Calculator from "./Calculator/Calculator";
import CreditCard from "./CreditCard/CreaditCard";
import OmletRecipe from "./OmletRecipet/OmletRecipe";
import ResponseWebSite from "./ResponseWebSite/ResponseWebSite";
import SocialLinks from "./SocialLinks/SocialLinks";
import Nav from "../Nav/Nav";

export const Projects = () => {
    return (
        <>
        <div>
        <div className="nav-menu">
            <Nav/>
        </div>
            <div className="project-social">
            <h3 className="header-social">Moj pierwszy projekt - Social Links</h3>
            <SocialLinks/>
            </div>
            <div className="project-omlette">
            <h3 className="header-omlette">Omelette Recipe</h3>
            <OmletRecipe/>
            </div>
            <div className="project-creditcard">
                <h3 className="header-credit">Credit Card Page</h3>
                <CreditCard />
            </div>
            <div className="project-calculator">
                <h3 className="header-calculator">Calculator</h3>
                <Calculator />
            </div>
            <div className="project-response-website">
                <h3 className="header-response">Response WebSite</h3>
                <ResponseWebSite />
            </div>
            <div className="project-book">
                <h3 className="header-book">Book Store</h3>
                <BookStore />
            </div>
            
        </div>
        </>
    )
}

export default Projects;