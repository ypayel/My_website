import "./Projects.scss";

import Nav from "../Nav/Nav";

import LinksProjects from "./LinksProjects/LinksProjects";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
    <Nav />
      <div className="projects-conteiner">
          <div className="links-component">
            <LinksProjects />
          </div>
      </div>
    </motion.div>
  );
};

export default Projects;
