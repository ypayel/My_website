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
          <div className="links-component">
            <LinksProjects />
          </div>
      </div>
    </>
  );
};

export default Projects;
