import logoNavbarLinks from "../../assets/logo trasparente (1) (1).png";
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
