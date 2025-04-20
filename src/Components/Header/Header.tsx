import { Link } from "react-router-dom";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <>
      <header className="row">
        <div className="col-lg-12">
          <Link className="text-decoration-none text-black" to={"/"}>
            <h4 className="logo mt-5 pt-4">LOGO</h4>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
