import { Link } from "react-router-dom";
import "./Navbar.css";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const { i18n, t } = useTranslation();
  return (
    <nav className="row">
      <div className="col-sm-12 col-md-12 col-lg-6">
        <ul className="navbar-links d-flex justify-content-center align-items-center list-unstyled gap-3 mt-3">
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

          <Link className="text-decoration-none" to={"/Supportaci"}>
            {t("links.link6")}
          </Link>
        </ul>
      </div>
      <div className="col-lg-6 d-flex justify-content-end">
        <select
          className="me-5"
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            MozAppearance: "none",
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
  );
};

export default Navbar;
