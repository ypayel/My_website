import Nav from "../../Nav/Nav";
import "./ColorPicker.scss";
export const  ColorPicker = () => {

const skrypt = () => {
    const elements = [`d1`, `d2`, `d3`, `d4`, `d5`];
    const x = parseInt((document.getElementById('x') as HTMLInputElement).value);
    elements.forEach((elementsId, index) => {
        const element = document.getElementById(elementsId);
        if(element) {
            element.style.display = 'block';
            element.style.background = `hsl(${x}, ${100 - index * 20}%, 50%)`;
        }
    });
 }
    return (
        <>
        <div className="color">
			<Nav/>
			<div className="color-container">
        <header className="color-header">
		<section className="left">
			<h1>Pomocnik CSS</h1>
		</section>
		<section className="right">
			<ul>
				<li className="color-list"><a href="https://www.w3schools.com/css/" target="_blank" className="color-link">Pomoc</a></li>
			</ul>
		</section>
	</header>
	<main className="color-main">
		<h2>Podaj składową H koloru w kodzie HSL</h2>
		<p>od 0 do 30 czerwienie, do 60 żółcie, do 150 zielenie, do 250 niebieskie, do 360 fiolet i purpura</p>
		<img src={process.env.PUBLIC_URL + '/images/kolory.jpg'}alt="Przestrzeń barw HSL"  className="color-image"/><br/>
		<input type="number" id="x" max="360" placeholder="0 - 360" />
		<button onClick={(e) => {e.preventDefault();skrypt() }}>Generuj paletę</button>
		<table className="color-table">
			<tr>
				<td id="d1" colSpan={4}>Kolor główny</td>
			</tr>
			<tr>
				<td id="d2">kolor 2</td>
				<td id="d3">kolor 3</td>
				<td id="d4">kolor 4</td>
				<td id="d5">kolor 5</td>
			</tr>
		</table>
	</main>
	<footer className="color-footer">
		<p>Autor: 00000000</p>
	</footer>
	</div>
        </div>
        </>
    )
}

export default ColorPicker;