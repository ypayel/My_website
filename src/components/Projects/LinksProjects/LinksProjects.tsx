import "./LinksProjects.scss";
import { Link } from "react-router-dom";

export const LinksProjects = () => {
  return (
    <div className="links-container">
      <div className="project-container">
        <Link className="project-link" to="/second">
          <img
            src={process.env.PUBLIC_URL + "/images/BookStore.png"}
            className="project-image"
            alt="bookStore"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/calculator">
          <img
            src={process.env.PUBLIC_URL + "/images/Calculator.png"}
            className="project-image"
            alt="calculator"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/colorPicker">
          <img
            src={process.env.PUBLIC_URL + "/images/ColorPicker.png"}
            className="project-image"
            alt="colorPicker"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/creditCard">
          <img
            src={process.env.PUBLIC_URL + "/images/CreditCard.png"}
            className="project-image"
            alt="creditCard"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/fryzjer">
          <img
            src={process.env.PUBLIC_URL + "/images/Fryzjer.png"}
            className="project-image"
            alt="fryzjer"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/gazeta">
          <img
            src={process.env.PUBLIC_URL + "/images/Gazeta.png"}
            className="project-image"
            alt="gazeta"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/galleria">
          <img
            src={process.env.PUBLIC_URL + "/images/Galleria.png"}
            className="project-image"
            alt="galleria"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/linkPage">
          <img
            src={process.env.PUBLIC_URL + "/images/LinkPage.png"}
            className="project-image"
            alt="linkPage"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/omlette">
          <img
            src={process.env.PUBLIC_URL + "/images/Omlette.png"}
            className="project-image"
            alt="omlette"
          />
        </Link>
      </div>
      <div className="project-container">
        <Link className="project-link" to="/responseWeb">
          <img
            src={process.env.PUBLIC_URL + "/images/ResponseWeb.png"}
            className="project-image"
            alt="responseWeb"
          />
        </Link>
      </div>
    </div>
  );
};

export default LinksProjects;
