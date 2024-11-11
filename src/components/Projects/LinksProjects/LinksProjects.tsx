import "./LinksProjects.scss";
import { Link } from "react-router-dom";
export const LinksProjects = () => {
  return (
    <>
      <div className="links-container">
        <div className="bookStore-container">
          <Link className="bookStore-link" to="/second">
            <img
              src={process.env.PUBLIC_URL + "/images/BookStore.png"}
              className="bookStore-image"
              alt="bookStore"
            />
          </Link>
        </div>
        <div className="calculator-container">
          <Link className="calculator-link" to="/calculator">
            <img
              src={process.env.PUBLIC_URL + "/images/Calculator.png"}
              className="calculator-image"
              alt="calculator"
            />
          </Link>
        </div>
        <div className="colorPicker-container">
            <Link className="colorPicker-link" to="/colorPicker">
            <img src={process.env.PUBLIC_URL + "/images/ColorPicker.png"} className="colorPicker-image" alt="colorPicker"/>
            </Link>
        </div>
        <div className="creditCard-container">
            <Link className="creditCard-link" to="/creditCard">
            <img src={process.env.PUBLIC_URL + "/images/CreditCard.png"} alt="creditCard" />
            </Link>
        </div>
        <div className="fryzjer-container">
            <Link className="fryzjer-link" to="/fryzjer">
                <img src={process.env.PUBLIC_URL + "/images/Fryzjer.png"} alt="fryzjer" />
            </Link>
        </div>
        <div className="gazeta-container">
            <Link className="gazeta-link" to="/gazeta">
                <img src={process.env.PUBLIC_URL + "/images/Gazeta.png"} alt="gazeta" />
            </Link>
        </div>
        <div className="galleria-container">
            <Link className="galleria-link" to="/galleria">
                <img src={process.env.PUBLIC_URL + "/images/Galleria.png"} alt="galleria" />
            </Link>
        </div>
        <div className="linkPage-container">
            <Link className="linkPage-link" to="/linkPage">
            <img src={process.env.PUBLIC_URL + "/images/LinkPage.png"} alt="linkPage" />
            </Link>
        </div>
        <div className="omlette-container">
            <Link className="omlette-link" to="/omlette">
            <img src={process.env.PUBLIC_URL + "/images/Omlette.png"} alt="omlette" />
            </Link>
        </div>
        <div className="responseWeb_container">
            <Link className="responseWeb-link" to="/responseWeb">
            <img src={process.env.PUBLIC_URL + "/images/ResponseWeb.png"} alt="responseWeb" />
            </Link>
        </div>
      </div>
    </>
  );
};

export default LinksProjects;
