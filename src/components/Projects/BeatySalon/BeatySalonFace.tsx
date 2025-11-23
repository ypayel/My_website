import { useState } from "react";
import { Link } from "react-router-dom";
import "./BeatySalon.scss"
import Nav from "../../Nav/Nav";

export const BeatySalonFace = () => {
  const [piling, setPiling] = useState(false);
  const [maska, setMaska] = useState(false);
  const [masaz, setMasaz] = useState(false);
  const [regulacja, setRegulacja] = useState(false);
  const [wynik, setWynik] = useState("");

  const sprawdz = () => {
    let cena = 0;
    if (piling) cena += 45;
    if (maska) cena += 30;
    if (masaz) cena += 20;
    if (regulacja) cena += 5;

    setWynik("Cena zabiegów: " + cena);
  };

  return (
    <>
    <Nav />
      <div id="beaty-salon-face-lewy1">
        <h2>W ofercie</h2>
        <ul className="beaty-salon-face-ul">
          <li>
            <Link to="/face" className="beaty-salon-face-first-link">
              Zabiegi na twarz
            </Link>
            <ol>
              <li>Piling</li>
              <li>Maska</li>
              <li>Regulacja brwi</li>
            </ol>
          </li>
          <li>Masaż</li>
          <li>Diety oczyszczające</li>
        </ul>
        <Link to="/beaty-salon" className="beaty-salon-face-second-link">
          Do strony głównej
        </Link>
      </div>

      <div id="beaty-salon-face-prawy1">
        <h1>Salon Kosmetyczny</h1>
      </div>

      <div id="beaty-salon-face-prawy2">
        <h2>Sprawdź cenę swojej wizyty</h2>

        <label>
          <input
            type="checkbox"
            checked={piling}
            onChange={(e) => setPiling(e.target.checked)}
          />
          Piling
          <br />
        </label>

        <label>
          <input
            type="checkbox"
            checked={maska}
            onChange={(e) => setMaska(e.target.checked)}
          />
          Maska
          <br />
        </label>

        <label>
          <input
            type="checkbox"
            checked={masaz}
            onChange={(e) => setMasaz(e.target.checked)}
          />
          Masaż twarzy
          <br />
        </label>

        <label>
          <input
            type="checkbox"
            checked={regulacja}
            onChange={(e) => setRegulacja(e.target.checked)}
          />
          Regulacja brwi
          <br />
        </label>

        <button
          type="button"
          onClick={sprawdz}
          className="beaty-salon-face-button"
        >
          Sprawdź cenę
        </button>

        <p>{wynik}</p>
      </div>

      <div id="beaty-salon-face-lewy2">
        <img
          src={process.env.PUBLIC_URL + "/images/beatysalon_2.jpg"}
          alt="Kosmetyczka"
          className="beaty-salon-face-img"
        />
      </div>

      <div id="beaty-salon-face-stopka">
        <p>Autor: 00000000</p>
      </div>
    </>
  );
};

export default BeatySalonFace;
