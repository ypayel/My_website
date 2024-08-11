import { BookList } from "../../components/BookList/BookList";
import { Background } from "../Nav/Background/Background";
import { MainNav } from "../Nav/MainNav/MainNav";
import { SearchProvider } from "../../hooks/searchContext/searchContext";
import SearchInput from "../SearchInput/searchInput";
import { BasketBookContextProvider } from "../BasketBookContext/BasketBookContext";

export const MainPage = () => {
  return (
    <div>
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
