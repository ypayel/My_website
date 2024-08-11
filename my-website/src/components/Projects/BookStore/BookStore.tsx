import "./BookStore.scss";
import { Route, Routes } from "react-router-dom";
import { BookDetails } from "./components/BookDetails/BookDetails";
import { MainPage } from "./components/MainPage/MainPage";
import { TranslateButtons } from "./components/TranslateButtons/TranslateButtons";
import { CartBook } from "./components/CartButton/CartButton";
import SellBookComponent from "./components/SellBookComponent/sellBookComponent";
import AddProduct from "./components/AddProduct/AddProduct";
import EditBooks from "./components/EditBooks/EditBooks";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/edit" element={<EditBooks />} />
        <Route path="/bookdetails/:id" element={<BookDetails />} />
        <Route path="/sell" element={<SellBookComponent />} />
        <Route path="/cart" element={<CartBook />} />
        <Route path="/trans" element={<TranslateButtons />} />
      </Routes>
    </div>
  );
}

export default App;
