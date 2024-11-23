import React from "react";
import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import AddProduct from "./components/Projects/BookStore/components/AddProduct/AddProduct";
import EditBooks from "./components/Projects/BookStore/components/EditBooks/EditBooks";
import { BookDetails } from "./components/Projects/BookStore/components/BookDetails/BookDetails";
import { CartBook } from "./components/Projects/BookStore/components/CartButton/CartButton";
import SellBookComponent from "./components/Projects/BookStore/components/SellBookComponent/sellBookComponent";
import { TranslateButtons } from "./components/Projects/BookStore/components/TranslateButtons/TranslateButtons";
import MainPageBook from "./components/Projects/BookStore/components/MainPageBook/MainPageBook";
import Fryzjer from "./components/Projects/Fryzjer/Fryzjer";
import { Fryzura } from "./components/Projects/Fryzjer/Fryzura";
import Galleria from "./components/Projects/Galleria/Galleria";
import { GalleriaStorage } from "./components/Projects/Galleria/GalleriaStorage";
import Calculator from "./components/Projects/Calculator/Calculator";
import ColorPicker from "./components/Projects/ColorPicker/ColorPicker";
import CreditCard from "./components/Projects/CreditCard/CreaditCard";
import Gazeta from "./components/Projects/Gazeta/Gazeta";
import SocialLinks from "./components/Projects/SocialLinks/SocialLinks";
import OmletRecipe from "./components/Projects/OmletRecipet/OmletRecipe";
import ResponseWebSite from "./components/Projects/ResponseWebSite/ResponseWebSite";

function App() {
  return (
    <div className="App">
      <Routes>
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
      </Routes>
    </div>
  );
}

export default App;
