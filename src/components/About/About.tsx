import { motion, Variants } from "framer-motion";
import Nav from "../Nav/Nav";
import "./About.scss";

export const About = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

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

        <motion.div
          className="text-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <motion.h1 className="about-header" variants={itemVariants}>
            About Me
          </motion.h1>

          <motion.h3 className="about-header-first" variants={itemVariants}>
            Summary
          </motion.h3>

          <motion.div className="about-first-container" variants={itemVariants}>
            <p className="about-first-text">
              Ambitious and motivated IT enthusiast with a strong technical
              background. I enjoy learning new technologies, solving problems,
              and working both independently and as part of a team. My goal is
              to continue growing in the IT industry and contribute to
              innovative projects.
            </p>
          </motion.div>

          <motion.h3 className="about-header-second" variants={itemVariants}>
            Education
          </motion.h3>

          <motion.div
            className="about-second-container"
            variants={itemVariants}
          >
            <p className="about-second-text">
              I successfully completed a one-year programming course at Software
              Development Academy (SDA Academy), earning a certificate of
              completion. The program covered a wide range of topics including
              HTML, CSS, JavaScript, Git, and frontend development practices.
            </p>
          </motion.div>

          <motion.div className="about-third-container" variants={itemVariants}>
            <p className="about-third-text">
              I am studying Computer Science at WSB University in Gdańsk with a
              specialization in Front-End Development. My studies have included
              C# programming, computer networks, and cybersecurity basics, and
              from the second year I will focus on Front-End technologies.
            </p>
          </motion.div>

          <motion.div className="about-third-container" variants={itemVariants}>
            <p className="about-third-text">
              Graduate of the Józef Bem Technical School, where I gained
              practical skills in HTML, CSS, SQL, C++, computer networks and
              topologies, hardware assembly, and command line tools.
            </p>
          </motion.div>

          <motion.h3 className="about-header-four" variants={itemVariants}>
            Certificate
          </motion.h3>

          <motion.div className="about-four-container" variants={itemVariants}>
            <p className="about-four-text">
              You can view my verified course certificate here:
              <a
                href="https://app.diplomasafe.com/pl-PL/diploma/d859f9cfc625bf746ae5add1a94d275450f1f2760"
                target="_blank"
                rel="noreferrer"
                className="certificate-link"
              >
                {" "}
                Certificate
              </a>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
