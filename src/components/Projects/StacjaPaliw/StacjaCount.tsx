import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../../Nav/Nav";
import "./StacjaCount.scss"
export const StacjaCount = () => {
  const [paliwo, setPaliwo] = useState("");
  const [ilosc, setIlosc] = useState("");
  const [wynik, setWynik] = useState("");
  const countFuel = () => {
    const paliwoNum = parseInt(paliwo);
    const iloscNum = parseFloat(ilosc);

    if (![1, 2].includes(paliwoNum)) {
      setWynik("Niepoprawny rodzaj paliwa (1 – benzyna, 2 – olej napędowy).");
      return;
    }

    if (isNaN(iloscNum) || iloscNum <= 0) {
      setWynik("Wprowadź poprawną ilość litrów.");
      return;
    }

    const cena = paliwoNum === 1 ? 4 : 3.5;
    const koszt = cena * iloscNum;
    setWynik(`Koszt paliwa: ${koszt.toFixed(2)} zł`);
  };
  return (
    <div className="count-conteiner">
      <Nav/>
      <div className="count-baner-left">
        <h1 className="count-baner-left-header">Stacja Paliw</h1>
      </div>
      <div className="count-baner-right">
        <Link to="/stacjaPaliw">
          <img
            src={process.env.PUBLIC_URL + "/images/home.png"}
            className="stacja-home-image"
            alt="home"
          />
        </Link>
        <Link to="/stacjaCount">
          <img
            src={process.env.PUBLIC_URL + "/images/znak.png"}
            className="stacja-count-image"
            alt="znak"
          />
        </Link>
      </div>
      <div className="count-main">
        <h3>Oblicz koszt paliwa</h3>
        <label>
          Rodzaj paliwa (1-bezyna, 2-olej napędowy)
          <br />
          <input type="number" value={paliwo} onChange={(e) => setPaliwo(e.target.value)} className="count-fuel-input" />
          <br />
        </label>
        <label>
          Ile litrów
          <br />
          <input type="number" value={ilosc} onChange={(e) => setIlosc(e.target.value)} className="count-value-input" />
          <br />
        </label>
        <button type="button" onClick={countFuel} className="count-button">
          OBLICZ
        </button>
        <p className="count-result">{wynik}</p>
      </div>
      <div className="count-left">
        <a href="kwerendy.txt" className="count-link-download">
          Pobierz kwerendy
        </a>
      </div>
      <div className="count-right">
        <img
          src={process.env.PUBLIC_URL + "/images/samochod.png"}
          alt="samochod"
          className="count-car-image"
        />
      </div>
      <div className="count-footer">
        <p>00000000</p>
      </div>
    </div>
  );
};

export default StacjaCount;
