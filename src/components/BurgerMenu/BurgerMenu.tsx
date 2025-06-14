import React from "react";
import "./BurgerMenu.scss";
import { Link } from "react-router-dom";
  type BurgerMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const BurgerMenu = ( {isOpen, toggleMenu} : BurgerMenuProps ) => {

  return (
    <>
        <div
          className={`slide__left ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>
        <div className={`slide__right ${isOpen ? "open" : ""}`}>
          <ul className="slide__right__ul">
            <div className="slide__right__all__li">
              <li className="slide__right__ul__li">
                <Link className="p_link" to="/">
                  Home
                </Link>
                <svg
                  className="slide__right__ul__svg"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 7L10 12L15 17"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </li>
              <li className="slide__right__ul__li">
                <Link className="p_link" to="/projects">
                  Projects
                </Link>
                <svg
                  className="slide__right__ul__svg"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 7L10 12L15 17"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </li>
              <li className="slide__right__ul__li">
                <Link className="p_link" to="/about">
                  About
                </Link>
                <svg
                  className="slide__right__ul__svg"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 7L10 12L15 17"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </li>
              <li className="slide__right__ul__li">
                <Link className="p_link" to="/contact">
                  Contact
                </Link>
                <svg
                  className="slide__right__ul__svg"
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M15 7L10 12L15 17"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                  </g>
                </svg>
              </li>
            </div>
          </ul>
          
        </div>
    </>
  );
};
export default BurgerMenu;


