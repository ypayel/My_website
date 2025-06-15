import { motion } from "framer-motion";
import Nav from "../Nav/Nav";
import "./Contact.scss";
import ForumMain from "./ForumMain/ForumMain";
export const Contact = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Nav />
      <div className="contact-conteiner">
        <div className="contact-forum-main">
          <div className="contact-forum">
            <ForumMain />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
