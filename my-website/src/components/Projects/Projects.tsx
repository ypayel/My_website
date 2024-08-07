import Calculator from "./Calculator/Calculator";
import CreditCard from "./CreditCard/CreaditCard";
import OmletRecipe from "./OmletRecipet/OmletRecipe";
import SocialLinks from "./SocialLinks/SocialLinks";

export const Projects = () => {
    return (
        <>
        <div>
            <SocialLinks/>
            <OmletRecipe/>
            <CreditCard />
            <Calculator />
        </div>
        </>
    )
}

export default Projects;