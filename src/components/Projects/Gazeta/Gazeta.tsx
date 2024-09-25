import "./Gazeta.scss";
const pokaz = (id: string) => {
    let artykul = document.getElementById(id)
    let artykul_1 = document.getElementById('artykul_1')
    let artykul_2 = document.getElementById('artykul_2')
    let artykul_3 = document.getElementById('artykul_3')
    let artykul_4 = document.getElementById('artykul_4')
    // artykul_1.style.display = 'none'
    // artykul_2.style.display = 'none'
    // artykul_3.style.display = 'none'
    // artykul_4.style.display = 'none'
    // artykul.style.display = 'block'

}

export const Gazeta = () => {
    return (
        <>
        <div className="container-gazeta">
        <header>
        <h1>Gazeta codzienna</h1>
    </header>
    <main>
        <button type="button" onClick={(e) => {e.preventDefault();
        pokaz('artykul_1');
    }}>Sekcja wiadomości z kraju</button>
        <section id="artykul_1">
            <h2>Szczepimy seniorów</h2>
            <p>Od piątku...</p>
        </section>
        <button type="button" onClick={(e) => {e.preventDefault();
            pokaz('artykul_2');
        }}>Sekcja sportowa</button>
        <section id="artykul_2">
            <h2>Stoch i Kubacki...</h2>
            <p>W środę...</p>
        </section>
        <button type="button" onClick={(e) => {e.preventDefault();
            pokaz('artykul_3');
        }}>Sekcja aktualności</button>
        <section id="artykul_3">
            <h2>Dzień Babci 2021...</h2>
            <p>Dzień Babci to...</p>
        </section>
        <button type="button" onClick={(e) => {e.preventDefault();
            pokaz('artykul_4');
        }}>Sekcja ogłoszeń</button>
        <section id="artykul_4">
            <h2>Zaginione i znalezione</h2>
            <p>W Oławie...</p>
        </section>
    </main>
    <footer>
        <blockquote>Pierwszym obowiązkiem dziennikarza jest nie nudzić. Drugim nie bać się. Trzecim niczego nie
            wyrzucać.</blockquote>
        <img src="obraz.jpg" alt="redaktor naczelny" />
        <h5>Jan Nowak<br />Redaktor naczelny<br />gazety codziennej</h5>
        <h3>Zespół</h3>
        <table>
            <tr>
                <td>Ewa</td>
                <td>wiadomości z kraju</td>
            </tr>
            <tr>
                <td>Krzysiek</td>
                <td>sport</td>
            </tr>
            <tr>
                <td>Ewelina</td>
                <td>aktualności</td>
            </tr>
            <tr>
                <td>Robert</td>
                <td>ogłoszenia</td>
            </tr>
        </table>
        <a href="http://dziennikarz.pl/" target="_blank">Więcej artykułów</a>
        <p>Stronę gazety codziennej przygotował: 000000000</p>
    </footer>
    </div>
        </>
    )
}

export default Gazeta 