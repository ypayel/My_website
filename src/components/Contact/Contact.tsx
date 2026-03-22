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
        <motion.div
          className="contact-forum-main"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="contact-forum">
            <ForumMain />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;