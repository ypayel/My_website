import { Link } from "react-router-dom";
import "./StacjaPaliw.scss"
export const StacjaPaliw = () => {
    return (
        <div>
	<div className="banerLewy">
		<h1>Stacja Paliw</h1>
	</div>
	<div className="banerPrawy">
		<Link to="/stacjaPaliw" className="stacja-main-link"><img src={process.env.PUBLIC_URL + "/images/home.png"} className="stacja-home-image" alt="home"/></Link>
		<Link to="/stacjaCount" className="stacja-count-link"><img src={process.env.PUBLIC_URL + "/images/znak.png"} className="stacja-count-image" alt="znak"/></Link>
	</div>
	<div className="stacja-main-conteiner">
		<h3>Godziny otwarcia stacji paliw</h3>
		<table>
			<tr>
				<td>Dzień</td>
				<td>Od</td>
				<td>Do</td>
			</tr>
			<tr>
				<td>Pn - Sb</td>
				<td>6:00</td>
				<td>24:00</td>
			</tr>
			<tr>
				<td>Nd</td>
				<td>7:00</td>
				<td>24:00</td>
			</tr>
		</table>
	</div>
	<div className="statcja-left">
		<Link to="./kwerendy.txt">Pobierz kwerendy</Link>
	</div>
	<div className="stacja-right">
		<img src="samochod.png" alt="samochod" className="statcja-car"/>
	</div>
	<div className="stacja-footer">
		<p>000000000</p>
	</div>
        </div>
    )
}
export default StacjaPaliw;