import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./MainPage.scss";
import { motion } from "framer-motion";

type ImageStack = {
  image: string;
  id: number;
  alt: string;
  empty?: boolean;
};
export const MainPage = () => {
  const images: ImageStack[] = [
    {
      image: `/images/react-icon.png`,
      id: 1,
      alt: "react",
    },
    {
      image: `/images/js.png`,
      id: 2,
      alt: "javascript",
    },
    {
      image: `/images/html-5.png`,
      id: 3,
      alt: "html",
    },
    {
      image: `/images/social.png`,
      id: 4,
      alt: "social",
    },
    {
      image: `/images/sass.png`,
      id: 5,
      alt: "sass",
    },
    {
      image: `/images/c-sharp.png`,
      id: 6,
      alt: "c-sharp",
    },
    {
      image: `/images/css-3.png`,
      id: 7,
      alt: "css-3",
    },
    {
      image: `/images/MySQL-Dark.svg`,
      id: 8,
      alt: "my-sql",
    },
    {
      image: `/images/Docker.svg`,
      id: 9,
      alt: "docker",
    },
    {
      image: "",
      id: 10,
      alt: "",
      empty: true,
    },
    {
      image: "",
      id: 11,
      alt: "",
      empty: true,
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <div className="main-conteiner">
        <motion.div
          className="welcome-text-conteiner"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="welcome-first-header">Hi, I`m Artem</h1>
          <h2 className="welcome-second-header">
            I`m a Junior Frontend Developer
          </h2>
          <p className="welcome-text">
            I am a junior frontend developer with a passion for bulding
            user-friendly web applications.
          </p>
          <button className="welcome-button">
            <Link className="welcome-button-text" to="/projects">
              VIEW MY PROJECTS
            </Link>
          </button>
        </motion.div>

        <div className="images-container">
          <div className="my-stack-icons">
            {images.map((item, index) => (
              <motion.div
                key={item.id}
                className={`stack-icon ${item.id === 1 ? "center" : ""}
                ${item.empty ? "empty" : ""}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                {!item.empty && (
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.alt}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MainPage;
