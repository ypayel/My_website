import "./About.scss";
export const About = () => {
    return (
        <>
        <div className="about-conteiner">
            <div className="image-conteiner">
            <img src="/images/me.jpg" alt="image" className="my-image"/>
            </div>
            <div className="text-conteiner">
            <h1 className="about-header">About Me</h1>
            <p className="about-first-text">
                I am a graduate of the Technical
                Schools named Józef Bem. In technical
                school, I learned the basics of
                programming languages and I want to
                further develop in this industry. I like
                to overcome various challenges, I am
                ambitious and I can work in a team.
            </p>
            <p className="about-second-text">
                I also completed a programming course at SDA Academy (Software Development Academy)
                and I have a certificate of completion of the course.
                Here below I leave a link to it: 
                <a href="https://app.diplomasafe.com/pl-PL/diploma/d859f9cfc625bf746ae5add1a94d275450f1f2760" target="blank" className="certificate-link">Certificate</a>
            </p> 
            </div>
        </div>
        </>
    )
}

export default About;