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
        </div>
        </>
    )
}

export default Projects;