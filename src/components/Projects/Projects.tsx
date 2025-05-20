import "./Projects.scss";

import Nav from "../Nav/Nav";

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
