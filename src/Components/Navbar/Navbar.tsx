import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="row">
      <div className="col-sm-12 col-md-12 col-lg-6">
        <ul className="navbar-links d-flex justify-content-center align-items-center list-unstyled gap-3 mt-3">
          <Link className="text-decoration-none" to={"/ChiSiamo"}>
            chi siamo
          </Link>

          <Link className="text-decoration-none" to={"/Lavori"}>
            lavori
          </Link>

          <Link className="text-decoration-none" to={"/Studio"}>
            studio
          </Link>

          <Link className="text-decoration-none" to={"/Aure"}>
            aure
          </Link>

          <Link className="text-decoration-none" to={"/Contatti"}>
            contatti
          </Link>

          <Link className="text-decoration-none" to={"/Supportaci"}>
            supportaci
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
          defaultValue={"en"}
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
