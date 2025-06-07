import { useState } from "react";
import './BurgerMenuHeader.scss'
import BurgerMenu from "../BurgerMenu/BurgerMenu";

export const BurgerMenuHeader = () => {
      const [isOpen, setIsOpen] = useState(false);
      const [isContainerVisible, setIsContainerVisible] = useState(false);
    
      const toggleMenu = () => {
        setIsOpen(!isOpen);
        setIsContainerVisible(!isContainerVisible);
        console.log("isOpen", isOpen);
      };
    return (
        <>
        <div
                className={`box__burgermenu ${isOpen ? "open" : ""}`}
                onClick={toggleMenu}
              >
                <div className="box__burgermenu__stripe"></div>
                <div className="box__burgermenu__stripe"></div>
                <div className="box__burgermenu__stripe"></div>
              </div>
              {/* <BurgerMenu isOpen={isOpen} toggleMenu={toggleMenu}/> */}
        </>
        
    )
}
export default BurgerMenuHeader;