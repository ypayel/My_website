import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import "./About.scss";
export const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <div className="about-container">
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/me.jpg"}
            alt="me"
            className="my-image"
          />
        </div>

        <div className="text-container">
          <h1 className="about-header">About Me</h1>
          <h3 className="about-header-first">Summary</h3>
          <div className="about-first-container">
            <p className="about-first-text">
              Ambitious and motivated IT enthusiast with a strong technical
              background. I enjoy learning new technologies, solving problems,
              and working both independently and as part of a team. My goal is
              to continue growing in the IT industry and contribute to
              innovative projects.
            </p>
          </div>
          <h3 className="about-header-second">Education</h3>
          <div className="about-second-container">
            <p className="about-second-text">
              I successfully completed a one-year programming course at Software
              Development Academy (SDA Academy), earning a certificate of
              completion. The program covered a wide range of topics including
              HTML, CSS, JavaScript, Git, and frontend development practices.
            </p>
          </div>

          <div className="about-third-container">
            <p className="about-third-text">
              I study at the WSB University in Gdansk, majoring in computer
              science, specializing in Front-End.
            </p>
          </div>
          <div className="about-third-container">
            <p className="about-third-text">
              Graduate of the Józef Bem Technical School, where I gained
              practical skills in HTML, CSS, SQL, C++, computer networks and
              topologies, hardware assembly, and command line tools.
            </p>
          </div>
          <h3 className="about-header-four">Certificate</h3>
          <div className="about-four-container">
            <p className="about-four-text">
              You can view my verified course certificate here:
              <a
                href="https://app.diplomasafe.com/pl-PL/diploma/d859f9cfc625bf746ae5add1a94d275450f1f2760"
                target="_blank"
                className="certificate-link"
              >
                {" "}
                Certificate
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
