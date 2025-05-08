import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import LogoImg from "../LogoImg/LogoImg";

const Header: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 logo-wrapper">
      <Link
        className="text-decoration-none text-black d-flex align-items-center"
        to={"/"}
      >
        {isHome ? <span className="logo-text">PRIMO AMORE</span> : <LogoImg />}
      </Link>
    </div>
  );
};

export default Header;
