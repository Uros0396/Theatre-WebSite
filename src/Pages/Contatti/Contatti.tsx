import Navbar from "../../Components/Navbar/Navbar";
import "./Contatti.css";
import ContactsImage from "../../assets/5. FIORE CONTATTI.png";
import Footer from "../../Components/Footer/Footer";

const Contatti: React.FC = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <Navbar />
      </div>

      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4 className="contacts">CONTATTI</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5">
            <div className="d-flex justify-content-between contatti">
              <div className="d-flex flex-column w-50 me-2 text-secondary">
                <p className="mb-0 pb-0">Laboratorio e Produzioni </p>
                <a
                  href="mailto:primoamoreperformingart@gmail.com"
                  className="text-secondary pb-5"
                >
                  primoamoreperformingart@gmail.com
                </a>

                <a
                  href="https://www.instagram.com/primoamore_performingart/"
                  className="text-secondary"
                >
                  ig @primoamore_performingart
                </a>
              </div>
              <div className="d-flex flex-column w-50 ms-2">
                <p className="text-secondary mb-0 pb-0">
                  Distribuzione - Giulia Bellentani{" "}
                </p>
                <a
                  href=" giuliabellentani.primoamore@gmail.com"
                  className="text-secondary pb-5"
                >
                  giuliabellentani.primoamore@gmail.com
                </a>
                <a
                  href="https://www.facebook.com/primoamoreperformingarts?locale=it_IT"
                  className="text-secondary"
                >
                  fb primoamoreperformingarts
                </a>
              </div>
            </div>
            <div className="text-center mt-5 immagine">
              <img
                src={ContactsImage}
                alt="chi-siamo-image"
                className="image-contacts"
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5 supportaci">
            <h4>SUPPORTACI</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 support">
            <p>
              Se credi nella nostra visione puoi sostenerci in tanti modi ,
              chiedendoci di collaborare, mettendo a disposizione attrezzatura,
              competenze o spazi.
            </p>
            <p>
              Scegliendo di destinare il 5 per mille a noi portando il nostro
              codice fiscale quando vai a fare la dichiarazione dei redditi con
              una semplice erogazione liberale, all’iban che puoi detrarre o
              dedurre.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contatti;
