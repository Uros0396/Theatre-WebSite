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
        <div className="row justify-content-center mb-4">
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4 lavori-col">
            <div className="card shadow">
              <img
                src={LavoriImage}
                alt="immagine-locandina1"
                className="img-top"
              />
              <div className="text-center mt-3">Titolo Locandina 1</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-4 lavori-col">
            <div className="card shadow">
              <img
                src={LavoriImage}
                alt="immagine-locandina2"
                className="img-top"
              />
              <div className="text-center mt-3">Titolo Locandina 2</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5 lavori-col">
            <div className="card shadow">
              <img
                src={LavoriImage}
                alt="immagine-locandina3"
                className="img-top"
              />
              <div className="text-center mt-3">Titolo Locandina 3</div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 mb-5 lavori-col">
            <div className="card shadow">
              <img
                src={LavoriImage}
                alt="immagine-locandina4"
                className="img-top"
              />
              <div className="text-center mt-3">Titolo Locandina 4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lavori;
