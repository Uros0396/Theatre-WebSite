import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

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
        <button className="menu-toggle d-lg-none" onClick={toggleMenu}>
          {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* NAVBAR CLASSICA SOLO DESKTOP */}
      <nav className="row d-none d-lg-flex justify-content-end">
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center">
          <ul className="navbar-links d-flex justify-content-center align-items-center list-unstyled gap-4">
            <Link className="text-decoration-none" to={"/ChiSiamo"}>
              {t("links.link1")}
            </Link>
            <Link className="text-decoration-none" to={"/Lavori"}>
              {t("links.link2")}
            </Link>
            <Link className="text-decoration-none" to={"/Studio"}>
              {t("links.link3")}
            </Link>
            <Link className="text-decoration-none" to={"/Aure"}>
              {t("links.link4")}
            </Link>
            <Link className="text-decoration-none" to={"/Contatti"}>
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
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <ul className="list-unstyled d-flex flex-column align-items-center gap-4">
            <Link
              className="text-decoration-none fs-3"
              to={"/ChiSiamo"}
              onClick={toggleMenu}
            >
              {t("links.link1")}
            </Link>
            <Link
              className="text-decoration-none fs-3"
              to={"/Lavori"}
              onClick={toggleMenu}
            >
              {t("links.link2")}
            </Link>
            <Link
              className="text-decoration-none fs-3"
              to={"/Studio"}
              onClick={toggleMenu}
            >
              {t("links.link3")}
            </Link>
            <Link
              className="text-decoration-none fs-3"
              to={"/Aure"}
              onClick={toggleMenu}
            >
              {t("links.link4")}
            </Link>
            <Link
              className="text-decoration-none fs-3"
              to={"/Contatti"}
              onClick={toggleMenu}
            >
              {t("links.link5")}
            </Link>
          </ul>
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
        </div>
      )}
    </>
  );
};

export default Navbar;
