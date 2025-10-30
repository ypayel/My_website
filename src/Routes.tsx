
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import MainPage from "./components/MainPage/MainPage"
import AddProduct from "./components/Projects/BookStore/components/AddProduct/AddProduct"
import { BookDetails } from "./components/Projects/BookStore/components/BookDetails/BookDetails"
import { CartBook } from "./components/Projects/BookStore/components/CartButton/CartButton"
import EditBooks from "./components/Projects/BookStore/components/EditBooks/EditBooks"
import MainPageBook from "./components/Projects/BookStore/components/MainPageBook/MainPageBook"
import SellBookComponent from "./components/Projects/BookStore/components/SellBookComponent/sellBookComponent"
import { TranslateButtons } from "./components/Projects/BookStore/components/TranslateButtons/TranslateButtons"
import Calculator from "./components/Projects/Calculator/Calculator"
import ColorPicker from "./components/Projects/ColorPicker/ColorPicker"
import CreditCard from "./components/Projects/CreditCard/CreaditCard"
import Fryzjer from "./components/Projects/Fryzjer/Fryzjer"
import { Fryzura } from "./components/Projects/Fryzjer/Fryzura"
import Galleria from "./components/Projects/Galleria/Galleria"
import { GalleriaStorage } from "./components/Projects/Galleria/GalleriaStorage"
import Gazeta from "./components/Projects/Gazeta/Gazeta"
import OmletRecipe from "./components/Projects/OmletRecipet/OmletRecipe"
import Projects from "./components/Projects/Projects"
import QrCode from "./components/Projects/QrCode/QrCode"
import ResponseWebSite from "./components/Projects/ResponseWebSite/ResponseWebSite"
import SocialLinks from "./components/Projects/SocialLinks/SocialLinks"
import {Route, Routes, useLocation } from "react-router-dom";
import StacjaPaliw from "./components/Projects/StacjaPaliw/StacjaPaliw"
import StacjaCount from "./components/Projects/StacjaPaliw/StacjaCount"
import { AnimatePresence } from "framer-motion"
import MainTask from "./components/Projects/MvpTask/MainTask"
import Konfigurator from "./components/Projects/Konfigurator/Konfigurator"


export const RoutesComponent = () => {

  const location = useLocation();
    return (
    <>
    <div className="routes-main">
      <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit" element={<EditBooks />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/sell" element={<SellBookComponent />} />
        <Route path="/trans" element={<TranslateButtons />} />
        <Route path="/second" element={<MainPageBook />} />
        <Route path="/cart" element={<CartBook />} />
        <Route path="/salon" element={<Fryzjer />} />
        <Route path="/hair" element={<Fryzura />} />
        <Route path='/galleria' element={<Galleria imgURL={GalleriaStorage} />} />
        <Route path="/calculator" element={<Calculator /> } />
        <Route path="/colorPicker" element={<ColorPicker /> } />
        <Route path="/creditCard" element={<CreditCard /> } />
        <Route path="/gazeta" element={<Gazeta />} />
        <Route path="/linkPage" element={<SocialLinks /> } />
        <Route path="/omlette" element={<OmletRecipe /> } />
        <Route path="/responseWeb" element={<ResponseWebSite /> } />
        <Route path="/qr-code" element={<QrCode />} />
        <Route path="/stacjaPaliw" element={<StacjaPaliw />} />
        <Route path="/stacjaCount" element={<StacjaCount />} />
        <Route path="/mvpPage" element={<MainTask />} />
        <Route path="/konfigurator" element={<Konfigurator />} />
      </Routes>
      </AnimatePresence>
    </div>
    </>
    );
}

export  default RoutesComponent;