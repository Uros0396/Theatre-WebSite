import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Header from "../Header/Header";
import LogoImg from "../LogoImg/LogoImg";

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <select
          className="d-lg-none mt-3"
          style={{
            appearance: "none",
            background: "none",
            border: "none",
            padding: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
          defaultValue={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>
        <button
          className="menu-toggle d-lg-none icon-button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      <nav
        className={`row d-none d-lg-flex justify-content-end align-items-center ciccia ${
          isHomePage ? "pt-0" : ""
        }`}
      >
        <Header />
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-end align-items-center mt-3">
          <ul className="navbar-links d-flex justify-content-center align-items-center list-unstyled gap-5">
            <Link
              className={`text-decoration-none color-li ${
                isActive("/ChiSiamo") ? "active" : ""
              }`}
              to={"/ChiSiamo"}
            >
              {t("links.link1")}
            </Link>
            <Link
              className={`text-decoration-none color-li ${
                isActive("/Lavori") ? "active" : ""
              }`}
              to={"/Lavori"}
            >
              {t("links.link2")}
            </Link>
            <Link
              className={`text-decoration-none color-li ${
                isActive("/Studio") ? "active" : ""
              }`}
              to={"/Studio"}
            >
              {t("links.link3")}
            </Link>
            <Link
              className={`text-decoration-none color-li ${
                isActive("/Aure") ? "active" : ""
              }`}
              to={"/Aure"}
            >
              {t("links.link4")}
            </Link>
            <Link
              className={`text-decoration-none color-li ${
                isActive("/Contatti") ? "active" : ""
              }`}
              to={"/Contatti"}
            >
              {t("links.link5")}
            </Link>
          </ul>
          <select
            className="ms-5 mb-3"
            style={{
              appearance: "none",
              background: "none",
              border: "none",
              padding: "5px",
              fontSize: "16px",
              cursor: "pointer",
            }}
            defaultValue={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
          >
            <option value="it">IT</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>

      {isMenuOpen && (
        <div>
          <div className="mobile-menu-overlay">
            <ul className="list-unstyled d-flex flex-column align-items-center gap-4">
              <Link
                className={`text-decoration-none fs-3 ${
                  isActive("/ChiSiamo") ? "active" : ""
                }`}
                to={"/ChiSiamo"}
                onClick={toggleMenu}
              >
                {t("links.link1")}
              </Link>
              <Link
                className={`text-decoration-none fs-3 ${
                  isActive("/Lavori") ? "active" : ""
                }`}
                to={"/Lavori"}
                onClick={toggleMenu}
              >
                {t("links.link2")}
              </Link>
              <Link
                className={`text-decoration-none fs-3 ${
                  isActive("/Studio") ? "active" : ""
                }`}
                to={"/Studio"}
                onClick={toggleMenu}
              >
                {t("links.link3")}
              </Link>
              <Link
                className={`text-decoration-none fs-3 ${
                  isActive("/Aure") ? "active" : ""
                }`}
                to={"/Aure"}
                onClick={toggleMenu}
              >
                {t("links.link4")}
              </Link>
              <Link
                className={`text-decoration-none fs-3 ${
                  isActive("/Contatti") ? "active" : ""
                }`}
                to={"/Contatti"}
                onClick={toggleMenu}
              >
                {t("links.link5")}
              </Link>
            </ul>
            <div className="d-lg-none">
              <Link
                className={`text-decoration-none fs-3 ${
                  isActive("/") ? "active" : ""
                }`}
                to={"/"}
                onClick={toggleMenu}
              >
                <LogoImg />
              </Link>
            </div>
          </div>
          <Header />
        </div>
      )}
    </>
  );
};

export default Navbar;
