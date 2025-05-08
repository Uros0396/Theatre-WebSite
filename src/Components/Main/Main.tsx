import logo from "../../assets/logo trasparente (1) (1).png";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="row">
      <div className="col-lg-12 d-flex justify-content-center pb-5">
        <img src={logo} alt="homepage-logo-image" className=" img-homepage" />
      </div>
    </main>
  );
};

export default Main;
