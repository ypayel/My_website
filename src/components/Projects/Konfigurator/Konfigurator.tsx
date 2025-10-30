import { useState } from "react";
import "./Konfigurator.scss";
import Nav from "../../Nav/Nav";

export const Konfigurator = () => {
  const [kolorTla, setKolorTla] = useState("white");
  const [kolorCzcionki, setKolorCzcionki] = useState("black");
  const [rozmiar, setRozmiar] = useState(100);
  const [czyRamka, setCzyRamka] = useState(true);
  const [typPunktora, setTypPunktora] = useState("disc");

  const stylPrawy = {
    background: kolorTla,
    color: kolorCzcionki,
    fontSize: `${rozmiar}%`,
    transition: "all 0.3s ease",
  };

  const stylObrazka = {
    border: czyRamka ? "1px solid white" : "none",
  };

  return (
    <>
      <Nav />
      <div id="lewy">
        <h1>Konfigurator stylów</h1>

        <p>Podaj kolor tła</p>
        <button onClick={() => setKolorTla("Indigo")}>Indigo</button>
        <button onClick={() => setKolorTla("SteelBlue")}>SteelBlue</button>
        <button onClick={() => setKolorTla("Olive")}>Olive</button>

        <p>Podaj kolor czcionki</p>
        <select
          id="kolorC"
          value={kolorCzcionki}
          onChange={(e) => setKolorCzcionki(e.target.value)}
        >
          <option value="White">White</option>
          <option value="Tan">Tan</option>
          <option value="Bisque">Bisque</option>
          <option value="Plum">Plum</option>
        </select>

        <p>Podaj rozmiar czcionki w procentach, np. 200%</p>
        <input
          type="number"
          id="rozmiar"
          value={rozmiar}
          onChange={(e) => setRozmiar(Number(e.target.value))}
        />

        <p>Czy rysunek ma mieć ramkę?</p>
        <label>
          <input
            type="checkbox"
            id="ramka"
            checked={czyRamka}
            onChange={(e) => setCzyRamka(e.target.checked)}
          />
          Rysuj ramkę
        </label>

        <p>Jaki jest typ punktora listy?</p>
        <label>
          <input
            type="radio"
            name="punktor"
            checked={typPunktora === "disc"}
            onChange={() => setTypPunktora("disc")}
          />
          dysk
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="punktor"
            checked={typPunktora === "square"}
            onChange={() => setTypPunktora("square")}
          />
          kwadrat
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="punktor"
            checked={typPunktora === "circle"}
            onChange={() => setTypPunktora("circle")}
          />
          okrąg
        </label>
      </div>

      {/* ✅ tutaj dodaj stylPrawy */}
      <div id="prawy" style={stylPrawy}>
        <img
          src={process.env.PUBLIC_URL + "/images/gibraltar.jpg"}
          alt="Gibraltar"
          id="image-gibraltar"
          style={stylObrazka}
        />
        <ul id="lista" style={{ listStyleType: typPunktora }}>
          <li>element 1</li>
          <li>element 2</li>
          <li>element 3</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div id="stopka">Autor: 0000000000</div>
    </>
  );
};

export default Konfigurator;
