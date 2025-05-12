import logo from "../../assets/0. HOME LOGO 2.png";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="row mt-5 pt-2">
      <div className="col-lg-12 d-flex justify-content-center mt-5  pb-5">
        <img src={logo} alt="homepage-logo-image" className="img-homepage" />
      </div>
    </main>
  );
};

export default Main;
