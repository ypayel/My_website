import "./AddProduct.scss";
import React, { useState } from "react";

import { TranslateButtons } from "../../components/TranslateButtons/TranslateButtons";
import { HamburgerMenu } from "../../components/Nav/HamburgerMenu/HamburgerMenu";
import { useTranslation } from "react-i18next";

type Product = {
  title: string;
  isbn: string;
  pageCount: number;
};
export const AddProduct = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");
  const { t, i18n } = useTranslation();

  const addProduct = async () => {
    try {
      const res = await fetch("https://fakeapi.extendsclass.com/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          title,
          isbn,
          pageCount, // przemiana ceny na liczbe
        }),
      });
      if (!res.ok) throw new Error("cannot add new product!");

      const newProduct = await res.json();
      alert(`pomyslnie utworzono produkt ${newProduct.title}`);
      console.log(newProduct);

      setProducts((prevProducts) => [...prevProducts, newProduct]);
      clearForm();
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addProduct();
  };

  const clearForm = () => {
    setTitle("");
    setIsbn("");
    setPageCount("");
  };

  return (
    <>
      <div className="main-container">
        <div className="hamburger-menu-container">
          <HamburgerMenu />
          <div className="lang-button">
        <TranslateButtons />
        </div>
        </div>
        <span className="container-form">
          <h2 className="add-new-book-text">{t(`add-new-book`)}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>
                <strong>{t(`title`)}</strong>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>
                <strong>ISBN:</strong>
              </label>
              <input
                type="text"
                value={isbn}
                onChange={(e) => setIsbn(e.target.value)}
                required
              />
            </div>
            <div className="input-container">
              <label>
                <strong>{t(`pages`)}</strong>
              </label>
              <input
                type="number"
                value={pageCount}
                onChange={(e) => setPageCount(e.target.value)}
                required
              />
            </div>
            <span className="add-new-book-button">
              <button className="submit-button" type="submit">
                {t(`addProduct`)}
              </button>
            </span>
          </form>
          <div className="preview-new-book">
            <h2>{t(`preview-new-book`)}</h2>
            <span>
              <strong>{t(`title`)}</strong> {title}
              <br />
              <strong>ISBN:</strong> {isbn}
              <br />
              <strong>{t(`page-count`)}:</strong> {pageCount}
              <br />
              <strong>{t(`date-added`)}:</strong> {new Date().toLocaleString()}
            </span>
          </div>
        </span>
      </div>
    </>
  );
};
export default AddProduct;