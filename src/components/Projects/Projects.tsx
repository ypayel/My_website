import "./Projects.scss"
import BookStore from "./BookStore/BookStore";
import App from "./BookStore/BookStore";
import Calculator from "./Calculator/Calculator";
import CreditCard from "./CreditCard/CreaditCard";
import OmletRecipe from "./OmletRecipet/OmletRecipe";
import ResponseWebSite from "./ResponseWebSite/ResponseWebSite";
import SocialLinks from "./SocialLinks/SocialLinks";

export const Projects = () => {
    return (
        <>
        <div>
            <div className="project-social">
            <h3 className="header">Moj pierwszy projekt - Social Links</h3>
            <SocialLinks/>
            </div>
            <div className="project-omlette">
            <h3 className="header">Omelette Recipe</h3>
            <OmletRecipe/>
            </div>
            <div className="project-creditcard">
                <h3 className="header">Credit Card Page</h3>
                <CreditCard />
            </div>
            <div className="project-calculator">
                <h3 className="header">Calculator</h3>
                <Calculator />
            </div>
            <div className="project-response-website">
                <h3 className="header">Response WebSite</h3>
                <ResponseWebSite />
            </div>
            <div className="project-book">
                <h3 className="header">Book Store</h3>
                <BookStore />
            </div>
            
        </div>
        </>
    )
}

export default Projects;