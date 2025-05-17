import Nav from "../Nav/Nav";
import "./Contact.scss";
import ForumMain from "./ForumMain/ForumMain";
export const Contact = () => {
  return (
    <>
      <Nav />
      <div className="contact-conteiner">
        <div className="contact-forum-main">
          <div className="contact-forum">
            <ForumMain />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
