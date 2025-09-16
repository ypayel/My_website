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
              I am a graduate of the Technical Schools named Józef Bem. In
              technical programming languages and. I want to further develop in
              this industry. I like to overcome various challenges, I am
              ambitious and I can work in a team.
            </p>
          </div>
          <h3 className="about-header-second">Education</h3>
          <div className="about-second-container">
            <p className="about-second-text">
              I also completed a programming course at SDA Academy (Software
              Development Academy) and I have a certificate of completion of the
              course.
            </p>
          </div>

          <div className="about-third-container">
            <p className="about-third-text">
              I study at the WSB University in Gdansk, majoring in computer
              science, specializing in Front-End.
            </p>
          </div>
          <h3 className="about-header-four">Certificate</h3>
          <div className="about-four-container">
            <p className="about-four-text">
              Here below I leave a link to:
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
