import { BookList } from "../BookList/BookList";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
import { SearchProvider } from "../../hooks/searchContext/searchContext";
import SearchInput from "../SearchInput/searchInput";
import { BasketBookContextProvider } from "../BasketBookContext/BasketBookContext";
import "./MainPageBook.scss"

export const MainPageBook = () => {
  return (
    <div className="main">
      <BasketBookContextProvider>
      <SearchProvider>
        <Background />
        <MainNav />
        <SearchInput />
        <BookList />
      </SearchProvider>
      </BasketBookContextProvider>
    </div>
  );
};

export default MainPageBook;