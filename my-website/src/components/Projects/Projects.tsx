
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
            <SocialLinks/>
            <OmletRecipe/>
            <CreditCard />
            <Calculator />
            <ResponseWebSite />
            <BookStore />
        </div>
        </>
    )
}

export default Projects;