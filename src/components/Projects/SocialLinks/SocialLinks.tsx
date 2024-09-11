import "./SocialLinks.scss"
export const SocialLinks = () => {
    return (
        <>

            <div className="main-conteiner-social">
                <div className="title">
                    <title>Frontend Mentor | Social links profile</title>
                </div>
                <header>
                    <div className="avatar-section">
                        <img src="images/avatar-jessica.jpeg" alt="avatar" className="avatar" />
                    </div>
                    <div className="description-social">
                        <span className="name-social">Jessica Randall</span>
                        <span className="adress-social">London, United Kingdom</span>
                        <span className="describe-social">"Front-end developer and avid reader."</span>
                    </div>
                </header>
                <main>
                    <div className="links-section">
                        <button className="links-button"><a href="https://github.com/ypayel" target="_blank" className="links-link">GitHub</a></button>
                        <button className="links-button"><a href="https://www.frontendmentor.io/profile/ypayel" target="_blank" className="links-link">Frontend Mentor</a></button>
                        <button className="links-button"><a href="https://www.linkedin.com/in/artsiom-kukankou/" target="_blank" className="links-link">LinkedIn</a></button>
                        <button className="links-button"><a href="https://x.com/" target="_blank" className="links-link">Twitter</a></button>
                        <button className="links-button"><a href="https://www.instagram.com/" target="_blank" className="links-link">Instagram</a></button>
                    </div>
                </main>
                <footer className="attribution-social">
                    Coded by <a href="https://github.com/ypayel" target="_blank" className="link-attribution-social">ypayel</a>.
                </footer>
            </div>
        </>
    )
}

export default SocialLinks;