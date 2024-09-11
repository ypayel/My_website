import { t } from "i18next";
import "./MainNav.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const MainNav = () => {
  const { t } = useTranslation();
  return (
    <div className="main-nav">
      <span className="container-for-links">
        <ul className="main-nav-list">
          <li className="main-nav-list-item">
            <Link className="main-nav-link" to="/second">{t(`mainpage`)}</Link>
          </li>
          <li className="main-nav-list-item">
            <Link className="main-nav-link" to="/add-product">{t(`addproduct`)}</Link>
          </li>
          <li className="main-nav-list-item">
            <Link className="main-nav-link" to="/edit">{t(`editproduct`)}</Link>
          </li>
          <li className="main-nav-list-item">
            <Link className="main-nav-link" to="/sell">{t(`sellproduct`)}</Link>
          </li>
          <li className="main-nav-list-item">
            <Link className="main-nav-link" to="/projects">{t(`backtoprojects`)}</Link>
          </li>
        </ul>
      </span>   
    </div>
  );
};