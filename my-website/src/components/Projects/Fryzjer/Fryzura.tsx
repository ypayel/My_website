import { Link } from "react-router-dom"
import "./Fryzjer";

// const odkryj = ()=> {
// 	let krotkie = document.getElementById("krotkie").checked;
// 	let srednie = document.getElementById("srednie").checked;
// 	let poldlugie = document.getElementById("poldlugie").checked;
// 	let dlugie = document.getElementById("dlugie").checked;
// 	let wynik = document.getElementById("wynik");
// 	let cena = 0;
// 	if(krotkie) cena = 25;
// 	if(srednie) cena = 30;
// 	if(poldlugie) cena = 40;
// 	if(dlugie) cena = 50;
// 	wynik.innerHTML = "Cena strzyżenia: " + cena;
// }
export const Fryzura = () => {
    return (
        <>
        <div className="fryzura-main">
        <div id="lewy1">
		<h2 className="header-fryzura"><Link className="salon-link" to="/salon">SALON FRYZJERSKI</Link></h2>
		<img src="images/obraz2.jpg" alt="Czesanie" className="second-img"/>
	</div>
	<div id="prawy1">
		<h2>MENU</h2>
	</div>
	<div id="prawy2">
		<ol>
			<li><Link className="hairstyle" to="/hair">Strzyżenie</Link>
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
		<h3>Dziś promocja na strzyżenie włosów</h3>
		<label>
			<input type="radio" name="typ" id="krotkie" />
			Krótkie<br/>
		</label>
		<label>
			<input type="radio" name="typ" id="srednie" />
			Średnie<br/>
		</label>
		<label>
			<input type="radio" name="typ" id="poldlugie" />
			Półdługie<br/>
		</label>
		<label>
			<input type="radio" name="typ" id="dlugie" />
			Długie<br/>
		</label>
		{/* <button type="button" onClick="odkryj()">Odkryj promocję</button> */}
		<p id="wynik"></p>
	</div>
	<div id="prawy3">
		<img src="images/obraz1.jpg" alt="Fryzjer" className="first-img"/>
	</div>
	<div id="stopka">
		<p>Autor: 00000000</p>
	</div>
        </div>
        </>
    )
}