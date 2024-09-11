import { Link } from "react-router-dom";
import "./Fryzjer";
export const Fryzjer = () => {
  return (
    <>
      <div className="fryzjer-main">
        <div id="lewy1">
          <h2 className="header-fryzjer">
            <Link className="salon-link" to="/salon">SALON FRYZJERSKI</Link>
          </h2>
          <img src="images/obraz2.jpg" alt="Czesanie" className="second-img"/>
        </div>
        <div id="prawy1">
          <h2 className="menu-fryzjer">MENU</h2>
        </div>
        <div id="prawy2">
          <ol>
            <li>
              <Link className="hairstyle" to="/hair">Strzyżenie</Link>
              <ul>
                <li>krótkie</li>
                <li>średnie</li>
                <li>półdługie</li>
                <li>długie</li>
              </ul>
            </li>
            <li>Czesanie</li>
            <li>Koloryzacja</li>
          </ol>
        </div>
        <div id="lewy2">
          <h5>Kontakt: 111 222 333</h5>
          <p>
            Witaj! Miło nam, że odwiedziłeś nasz salon.
            <br />
            Zapoznaj się z ofertą i sprawdź promocje!
          </p>
        </div>
        <div id="prawy3">
          <img src="images/obraz1.jpg" alt="Fryzjer" className="first-img"/>
        </div>
        <div id="stopka">
          <p>Autor: 000000000</p>
        </div>
      </div>
    </>
  );
};

export default Fryzjer;