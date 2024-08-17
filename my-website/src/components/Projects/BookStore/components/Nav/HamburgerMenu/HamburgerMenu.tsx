import { useState } from "react";
import "./HamburgerMenu.scss";
import Paths from "./Paths";

import { useTranslation } from "react-i18next";


export const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li className="list">
          <a href={Paths.home} className="links-list">{t(`mainpage`)}</a>
        </li>
        <li className="list">
          <a href={Paths.add} className="links-list">{t(`add`)}</a>
        </li>
        <li className="list">
          <a href={Paths.edit} className="links-list">{t(`edit`)}</a>
        </li>
        <li className="list">
          <a href={Paths.sell} className="links-list">{t(`sell`)}</a>
        </li>
        <li className="list">
          <a href={Paths.cart} className="links-list">{t(`basket`)}</a>
        </li>
      </ul>
    </div>
  );
};
