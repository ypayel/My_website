import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookType } from "../BookList/BookList";
import "./BookDetails.scss";
import { useTranslation } from "react-i18next";
import { TranslateButtons } from "../TranslateButtons/TranslateButtons";
import { HamburgerMenu } from "../Nav/HamburgerMenu/HamburgerMenu";
interface Params {
  id: string;
  [key: string]: string | undefined;
}
export const BookDetails: React.FC = () => {
  const { id } = useParams<Params>();
  const [book, setBook] = useState<BookType | null>(null);
  const { t, i18n } = useTranslation();
  const fetchBookDetails = async () => {
    try {
      const res = await fetch(`https://fakeapi.extendsclass.com/books/${id}`);
      if (!res.ok) {
        throw new Error("Something went wrong");
      }
      const data = await res.json();
      setBook(data);
    } catch (error) {
      console.error("Error fetching book details:", error);
    }
  };
  useEffect(() => {
    fetchBookDetails();
  }, [id]);
  if (!book) return <div>Loading...</div>;
  return (
  <div className="main">
    <div className="hamburger-menu-container">
                <HamburgerMenu />
                <div className="translate-button"> 
                    <TranslateButtons />
                </div>
            </div>
    <div className="book-details">
      <h2>{t(`bookdetails`)}</h2>
      <p>
        <strong>{t(`title`)}:</strong> {book.title}
      </p>
      <p>
        <strong>ISBN:</strong> {book.isbn}
      </p>
      <p>
        <strong>{t(`authors`)}:</strong> {book.authors.join(", ")}
      </p>
    </div>
    </div>
  );
};