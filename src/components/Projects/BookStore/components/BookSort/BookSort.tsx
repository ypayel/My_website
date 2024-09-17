import { Dispatch, SetStateAction } from "react";
import "./BookSort.scss";
import { useTranslation } from "react-i18next";
type props = {
  setSortBy: Dispatch<SetStateAction<string>>;
};
export const BookSort = ({ setSortBy }: props) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="sort-dropdown">
      {t(`sortby`)}
      <ul className="sort-select">
        <li onClick={() => setSortBy("author")} className="sort-item">
          <span>{t(`authors`)}</span>
          <img src={process.env.PUBLIC_URL + '/images/arrow-down-a-z-svgrepo-com.svg'} alt="arrow_down"/>
        </li>
        <li onClick={() => setSortBy("title")} className="sort-item">
          <span>{t(`title`)}</span>
          <img src={process.env.PUBLIC_URL + '/images/arrow-down-a-z-svgrepo-com.svg'} alt="arrow_down"/>
        </li>
        <li onClick={() => setSortBy("ISBN")} className="sort-item">
          <span>ISBN</span>
          <img src={process.env.PUBLIC_URL + '/images/arrow-down-short-wide-svgrepo-com.svg'} alt="arrow_short"/>
        </li>
      </ul>
    </div>
  );
};