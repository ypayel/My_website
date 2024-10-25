import "./Gazeta.scss";
const pokaz = (id: string) => {
    const sekcje = ['artykul_ 1','artykul_2','artykul_3','artykul_4' ];
    sekcje.forEach((sekcjeId) => {
        const sekcja = document.getElementById(sekcjeId);
        if (sekcja) {
            sekcja.style.display = `none`
        }
    });
    const artyklul = document.getElementById(id);
    if(artyklul) {
        artyklul.style.display = `block`;
    }
}

export const Gazeta = () => {
    return (
        <>
        <div className="container-gazeta">
        <header className="header-gazeta">
        <h1>Gazeta codzienna</h1>
    </header>
    <main className="main-gazeta">
        <button className="button-show-article_1" type="button" onClick={(e) => {e.preventDefault();
        pokaz('artykul_1');
    }}>Sekcja wiadomości z kraju</button>
        <section id="artykul_1" style={{display: `none`}}>
            <h2>Szczepimy seniorów</h2>
            <p>Od piątku...</p>
        </section>
        <button className="button-show-article_2" type="button" onClick={(e) => {e.preventDefault();
            pokaz('artykul_2');
        }}>Sekcja sportowa</button>
        <section id="artykul_2" style={{display: `none`}}>
            <h2>Stoch i Kubacki...</h2>
            <p>W środę...</p>
        </section>
        <button className="button-show-article_3" type="button" onClick={(e) => {e.preventDefault();
            pokaz('artykul_3');
        }}>Sekcja aktualności</button>
        <section id="artykul_3" style={{display: `none`}}>
            <h2>Dzień Babci 2021...</h2>
            <p>Dzień Babci to...</p>
        </section>
        <button className="button-show-article_4" type="button" onClick={(e) => {e.preventDefault();
            pokaz('artykul_4');
        }}>Sekcja ogłoszeń</button>
        <section id="artykul_4" style={{display: `none`}}>
            <h2>Zaginione i znalezione</h2>
            <p>W Oławie...</p>
        </section>
    </main>
    <footer className="footer-gazeta">
        <blockquote className="footer-cytat">Pierwszym obowiązkiem dziennikarza jest nie nudzić. Drugim nie bać się. Trzecim niczego nie
            wyrzucać.</blockquote>
        <h5 className="header_name">Jan Nowak<br />Redaktor naczelny<br />gazety codziennej</h5>
        <h3>Zespół</h3>
        <table className="table_gazeta">
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
        <a href="https://www.wp.pl/" target="_blank">Więcej artykułów</a>
        <p>Stronę gazety codziennej przygotował: 000000000</p>
    </footer>
    </div>
        </>
    )
}

export default Gazeta 