import { Link } from "react-router-dom";
import "./BeatySalon.scss"
import Nav from "../../Nav/Nav";

export const BeatySalon = () => {
    return (
        <>
        <Nav />
	<div id="beaty-salon-lewy1">
		<h2>W ofercie</h2>
		<ul className="beaty-salon-ul">
			<li><Link to="/face" className="beaty-salon-first-link">Zabiegi na twarz</Link>
				<ol>
					<li>Piling</li>
					<li>Maska</li>
					<li>Regulacja brwi</li>
				</ol>
			</li>
			<li>Masaż</li>
			<li>Diety oczyszczające</li>
		</ul>
		<Link to="/beaty-salon" className="beaty-salon-second-link">Do strony głównej</Link>
	</div>
	<div id="prawy1-salon">
		<h1>Salon Kosmetyczny</h1>
	</div>
	<div id="prawy2-salon">
		<img src={process.env.PUBLIC_URL + "/images/beatysalon_1.jpg"} alt="Zabiegi kosmetyczne" className="beaty-salon-first-img"/>
		<p>Witaj! Miło nam, że odwiedziłeś nasz salon.<br/>
		Zapoznaj się z ofertą i sprawdź ceny zabiegów lub skontaktuj się z nami</p>
		<h4>Telefon: 111 222 333</h4>
	</div>
	<div id="beaty-salon-lewy2">
		<img src={process.env.PUBLIC_URL +"/images/beatysalon_2.jpg"} alt="Kosmetyczka" className="beaty-salon-second-img"/>
	</div>
	<div id="beaty-salon-stopka">
		<p>Autor: 00000000</p>
	</div>
        </>
    )
}

export default BeatySalon;