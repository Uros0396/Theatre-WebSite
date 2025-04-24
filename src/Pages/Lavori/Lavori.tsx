import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import LavoriImage from "../../assets/pulpFiction.jpg";
import "./Lavori.css";

const Lavori: React.FC = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="container-fluid">
        <div className="row row-lavori mx-auto">
          <div className="col-sm-12 col-md-6 col-lg-6 p-5">
            <div className="card shadow lavori-col">
              <img src={LavoriImage} alt="" className="img-top" />
              <div className="text-center mt-3">Titolo Locandina 1</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-5">
            <div className="card shadow lavori-col">
              <img src={LavoriImage} alt="" className="img-top" />
              <div className="text-center mt-3">Titolo Locandina 2</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-5">
            <div className="card shadow lavori-col">
              <img src={LavoriImage} alt="" className="img-top" />
              <div className="text-center mt-3">Titolo Locandina 3</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 p-5">
            <div className="card shadow lavori-col">
              <img src={LavoriImage} alt="" className="img-top" />
              <div className="text-center mt-3">Titolo Locandina 4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lavori;
