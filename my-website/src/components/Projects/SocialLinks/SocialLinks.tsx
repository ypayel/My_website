import "./SocialLinks.scss"
export const SocialLinks = () => {
    return (
        <>

            <div className="main-conteiner">
                <div className="title">
                    <img src="images/favicon-32x32.png" alt="icon" className="favicon" />
                    <title>Frontend Mentor | Social links profile</title>
                </div>
                <header>
                    <div className="avatar-section">
                        <img src="images/avatar-jessica.jpeg" alt="avatar" className="avatar" />
                    </div>
                    <div className="description">
                        <span className="name">Jessica Randall</span>
                        <span className="adress">London, United Kingdom</span>
                        <span className="describe">"Front-end developer and avid reader."</span>
                    </div>
                </header>
                <main>
                    <div className="links-section">
                        <button><a href="https://github.com/ypayel" target="_blank">GitHub</a></button>
                        <button><a href="https://www.frontendmentor.io/profile/ypayel" target="_blank">Frontend Mentor</a></button>
                        <button><a href="https://www.linkedin.com/in/artsiom-kukankou/" target="_blank">LinkedIn</a></button>
                        <button><a href="https://x.com/" target="_blank">Twitter</a></button>
                        <button><a href="https://www.instagram.com/" target="_blank">Instagram</a></button>
                    </div>
                </main>
                <footer className="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/ypayel" target="_blank">ypayel</a>.
                </footer>
            </div>
        </>
    )
}

export default SocialLinks;