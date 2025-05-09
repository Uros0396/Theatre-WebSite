import Navbar from "../../Components/Navbar/Navbar";
import AureImage from "../../assets/4. AURE BANNER.png";
import Footer from "../../Components/Footer/Footer";
import "./Aure.css";

const Aure: React.FC = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <Navbar />
      </div>

      <div className="img-wrapper-chi-siamo mt-4">
        <img src={AureImage} alt="chi-siamo-image" className="img-chi-siamo" />
      </div>

      <div className="container-fluid">
        <div className="row aure">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4>AURE</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 mb-2">
            <p>
              Aure è un programma indipendente di ricerca artistica. Si
              incastona nel corpo fisico di Spazio Zephiro. Aure diventa rituale
              amoroso tra persone, materiali, spazi e azzardi stilistici.
            </p>
            <p>Il tema dell’edizione 2025 è CARNE VIVA.</p>
            <p>
              Foto e comunicazione: Giulio Favotto insieme ad Anna Gioia Perusin{" "}
            </p>
            <a
              href="/pr.nj.pdf"
              download
              className="text-danger text-decoration-underline"
            >
              <h5 className="text-danger mt-5">LINK AL PROGRAMMA</h5>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Aure;
