import { Link } from "react-router-dom";
import "./StacjaPaliw.scss"
import Nav from "../../Nav/Nav";
export const StacjaPaliw = () => {
    return (
        <div>
			<Nav/>
	<div className="banerLewy">
		
		<h1 className="banerLewy-header">Stacja Paliw</h1>
	</div>
	<div className="banerPrawy">
		<Link to="/stacjaPaliw" className="stacja-main-link"><img src={process.env.PUBLIC_URL + "/images/home.png"} className="stacja-home-image" alt="home"/></Link>
		<Link to="/stacjaCount" className="stacja-count-link"><img src={process.env.PUBLIC_URL + "/images/znak.png"} className="stacja-count-image" alt="znak"/></Link>
	</div>
	<div className="stacja-main-conteiner">
		<h3>Godziny otwarcia stacji paliw</h3>
		<table className="stacja-table">
			<tr>
				<td className="stacja-table-data">Dzień</td>
				<td className="stacja-table-data">Od</td>
				<td className="stacja-table-data">Do</td>
			</tr>
			<tr>
				<td className="stacja-table-data">Pn - Sb</td>
				<td className="stacja-table-data">6:00</td>
				<td className="stacja-table-data">24:00</td>
			</tr>
			<tr>
				<td className="stacja-table-data">Nd</td>
				<td className="stacja-table-data">7:00</td>
				<td className="stacja-table-data">24:00</td>
			</tr>
		</table>
	</div>
	<div className="statcja-left">
		<a href="./kwerendy.txt" className="stacja-link-download">Pobierz kwerendy</a>
	</div>
	<div className="stacja-right">
		<img src={process.env.PUBLIC_URL + "/images/samochod.png"} alt="samochod" className="statcja-car"/>
	</div>
	<div className="stacja-footer">
		<p>000000000</p>
	</div>
        </div>
    )
}
export default StacjaPaliw;