import { Link } from "react-router-dom";

export const StacjaCount = () => {
// const Count = () => {
// 	let paliwo = document.getElementById("paliwo").value;
// 	let ilosc = document.getElementById("ilosc").value;
// 	let wynik = document.getElementById("wynik");
// 	let cena = 0;
// 	if(paliwo == 1) cena = 4;
// 	if(paliwo == 2) cena = 3.5;
// 	wynik.innerHTML = "koszt paliwa: " + cena * ilosc + " zł";
// }
    return (
    <div>
<div className="count-baner-left">
		<h1>Stacja Paliw</h1>
	</div>
	<div className="count-baner-right">
		<Link to="/stacjaPaliw"><img src={process.env.PUBLIC_URL + "/images/home.png"} className="stacja-home-image" alt="home"/></Link>
		<Link to="/stacjaCount"><img src={process.env.PUBLIC_URL + "/images/znak.png"} className="stacja-count-image" alt="znak"/></Link>
	</div>
	<div className="count-main">
		<h3>Oblicz koszt paliwa</h3>
		<label>
			Rodzaj paliwa (1-bezyna, 2-olej napędowy)<br/>
			<input type="number" id="paliwo" className="count-fuel-input"/><br/>
		</label>
		<label>
			Ile litrów<br/>
			<input type="number" id="ilosc" className="count-value-input"/><br/>
		</label>
		{/* <button type="button" onclick={Count()} className="count-button">OBLICZ</button> */}
		<p className="count-result"></p>
	</div>
	<div className="count-left">
		<a href="kwerendy.txt">Pobierz kwerendy</a>
	</div>
	<div className="count-right">
		<img src="samochod.png" alt="samochod" className="count-car-image"/>
	</div>
	<div className="count-footer">
		<p>00000000</p>
	</div>
    </div>
    );
}

export default StacjaCount;