import "./Contact.scss";
export const Contact = () => {
    return (
        <>
        <div className="contact-conteiner">
            <h1 className="contact-first-header">Contact Me</h1>
            <p className="contact-welcometext">Here you will find how to contact me
            </p>
            <div className="info-conteiner">
            <p className="e-mail">E mail: kukankouartsiom@gmail.com</p> 
            <p className="contact-text">LinkedIn: <a href="https://www.linkedin.com/in/artsiom-kukankou/" className="contact-link" target="_blank">Link</a></p>
            </div>
        </div>
        </>
    )
} 

export default Contact;