import logoNavbarLinks from "../../assets/logo (1).jpg";
import "./LogoImg.css";

const LogoImg: React.FC = () => {
  return (
    <img
      src={logoNavbarLinks}
      alt="logo-homepage navbar links"
      className="logoImgNav"
    />
  );
};

export default LogoImg;
