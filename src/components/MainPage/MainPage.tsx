import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import "./MainPage.scss";
export const MainPage = () => {
  return (
    <>
      <Nav />
      <div className="main-conteiner">
        <div className="welcome-text-conteiner">
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
        </div>
        <div className="images-container">
          <div className="my-stack-icons">
            <div className="stack-icon center">
              <img
                src={process.env.PUBLIC_URL + `/images/react-icon.png`}
                className="react-icon"
                alt="react"
              />
            </div>
            <div className="stack-icon">
              <img
                src={process.env.PUBLIC_URL + `/images/js.png`}
                className="js-icon"
                alt="js"
              />
            </div>
            <div className="stack-icon">
              <img
                src={process.env.PUBLIC_URL + `/images/html-5.png`}
                className="html-icon"
                alt="html"
              />
            </div>
            <div className="stack-icon">
              <img
                src={process.env.PUBLIC_URL + `/images/social.png`}
                className="social-icon"
                alt="social"
              />
            </div>
            <div className="stack-icon">
              <img
                src={process.env.PUBLIC_URL + `/images/sass.png`}
                className="sass-icon"
                alt="sass"
              />
            </div>
            <div className="stack-icon">
              <img
                src={process.env.PUBLIC_URL + `/images/c-sharp.png`}
                className="c-sharp-icon"
                alt="c-sharp"
              />
            </div>
            <div className="stack-icon">
              <img
                src={process.env.PUBLIC_URL + `/images/css-3.png`}
                className="css-3-icon"
                alt="css-3"
              />
            </div>
            <div className="stack-icon empty"></div>
            <div className="stack-icon empty"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
