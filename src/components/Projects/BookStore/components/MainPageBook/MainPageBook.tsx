import { BookList } from "../BookList/BookList";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
import { SearchProvider } from "../../hooks/searchContext/searchContext";
import SearchInput from "../SearchInput/searchInput";
import { BasketBookContextProvider } from "../BasketBookContext/BasketBookContext";
import "./MainPageBook.scss"
import Nav from "../../../../Nav/Nav";

export const MainPageBook = () => {
  return (
    
    <div className="main">
      <Nav/>
      <div className="container-pageBook">
      <BasketBookContextProvider>
      <SearchProvider>
        <Background />
        <MainNav />
        <SearchInput />
        <BookList />
      </SearchProvider>
      </BasketBookContextProvider>
      </div>
    </div>
  );
};

export default MainPageBook;