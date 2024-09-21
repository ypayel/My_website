export const Galleria = () => {
        let nr = 1
    // const zamiana = (src, numer) => {
    //     let glowne = document.getElementById('glowne')
    //     glowne.src = src
    //     nr = numer
    
    // }
    
    // const prev = () => {
    //     let aktualne = document.getElementById('glowne')
    //     nr--
    //     if (nr == 0) nr = 5
    //     if (nr == 1) aktualne.src = "images/1.jpg"
    //     if (nr == 2) aktualne.src = "images/2.jpg"
    //     if (nr == 3) aktualne.src = "images/3.jpg"
    //     if (nr == 4) aktualne.src = "images/4.jpg"
    //     if (nr == 5) aktualne.src = "images/5.jpg"
    // }
    
    // const next = () => {
    //     let aktualne = document.getElementById('glowne')
    //     nr++
    //     if (nr == 6) nr = 1
    //     if (nr == 1) aktualne.src = "images/1.jpg"
    //     if (nr == 2) aktualne.src = "images/2.jpg"
    //     if (nr == 3) aktualne.src = "images/3.jpg"
    //     if (nr == 4) aktualne.src = "images/4.jpg"
    //     if (nr == 5) aktualne.src = "images/5.jpg"
    // }
    const handleClick = () => {

    }
        return (
            <>
            <div className="header-galleria">
            <h1>Galeria obrazów</h1>
            </div>
            <div className="main-galleria">
            <section id="panelLewy">
                <img src="zdjecie.jpg" alt="zdjęcie dnia" />
                <h3>Zdjęcia opublikowali</h3>
                <table>
                    <tr>
                        <td>Anna Porada</td>
                        <td>10 zdjęc</td>
                    </tr>
                    <tr>
                        <td>Krzysztof Wasilewski</td>
                        <td>12 zdjęc</td>
                    </tr>
                    <tr>
                        <td>Monika Kowalska</td>
                        <td>4 zdjęcia</td>
                    </tr>
                </table>
            </section>
            <section id="panelPrawy">
                {/* <button type="button" onClick={prev}>prev</button> */}
                <img id="glowne" src="1.jpg" alt="galeria" />
                {/* <button type="button" onClick={next}>next</button> */}
                <hr />
                {/* <img src="images/1.jpg" alt="miniatura" onClick="zamiana('1.jpg',1)" />
                <img src="images/2.jpg" alt="miniatura" onClick="zamiana('2.jpg',2)" />
                <img src="images/3.jpg" alt="miniatura" onClick="zamiana('3.jpg',3)" />
                <img src="images/4.jpg" alt="miniatura" onClick="zamiana('4.jpg',4)" />
                <img src="images/5.jpg" alt="miniatura" onClick="zamiana('5.jpg',5)" /> */}
            </section>
        <footer>
            <a href="https://pixabay.com" target="_blank">Więcej obrazów</a>
            <p>Galerię wykonał: 00000000</p>
        </footer>
            </div>
            </>
        )
    }
    
export default Galleria;