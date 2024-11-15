import "./Projects.scss";
import BookStore from "./BookStore/BookStore";
import App from "./BookStore/BookStore";
import Calculator from "./Calculator/Calculator";
import CreditCard from "./CreditCard/CreaditCard";
import OmletRecipe from "./OmletRecipet/OmletRecipe";
import ResponseWebSite from "./ResponseWebSite/ResponseWebSite";
import SocialLinks from "./SocialLinks/SocialLinks";
import Nav from "../Nav/Nav";
import Fryzjer from "./Fryzjer/Fryzjer";
import Galleria from "./Galleria/Galleria";
import { GalleriaStorage } from "./Galleria/GalleriaStorage";
import Gazeta from "./Gazeta/Gazeta";
import ColorPicker from "./ColorPicker/ColorPicker";
import LinksProjects from "./LinksProjects/LinksProjects";

export const Projects = () => {
  return (
    <>
      <Nav />
      <div className="projects-conteiner">
        {/* <div className="project-social">
          <h3 className="header-projects">
            Moj pierwszy projekt - Social Links
          </h3>
          <SocialLinks />
        </div>
        <div className="project-omlette">
          <h3 className="header-projects">Omelette Recipe</h3>
          <OmletRecipe />
        </div>
        <div className="project-creditcard">
          <h3 className="header-projects">Credit Card Page</h3>
          <CreditCard />
        </div>
        <div className="project-calculator">
          <h3 className="header-projects">Calculator</h3>
          <Calculator />
        </div>
        <div className="project-response-website">
          <h3 className="header-projects">Response WebSite</h3>
          <ResponseWebSite />
        </div>
        <div className="project-book">
          <h3 className="header-projects">Book Store</h3>
          <BookStore />
        </div>
        <div className="project-fryzjer">
          <h3 className="header-projects">Fryzjer</h3>
          <Fryzjer />
        </div>
        <div className="projects-galleria">
          <h3 className="header-projects">Galleria</h3>
          <Galleria imgURL={GalleriaStorage} />
        </div>
          <div className="projects-gazeta"> 
            <h3 className="header-projects">Gazeta</h3>
            <Gazeta />
          </div>
          <div className="projects-colorPicker">
            <h3 className="header-projects">Color Picker</h3>
            <ColorPicker />
          </div> */}
          <div>
            <LinksProjects />
          </div>
      </div>
    </>
  );
};

export default Projects;
