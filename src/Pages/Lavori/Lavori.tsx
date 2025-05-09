import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import LavoriImage1 from "../../assets/1. WORKS HAILSHAM.png";
import LavoriImage2 from "../../assets/2. WORKS CARMEN.png";
import LavoriImage3 from "../../assets/3. WORKS LIBERTà.png";
import LavoriImage4 from "../../assets/4. WORKS CUCINA.png";
import "./Lavori.css";

const Lavori: React.FC = () => {
  return (
    <>
      <div className="container-fluid ciao mt-4">
        <Navbar />
        <div className="row g-1 mt-5">
          <div className="col-sm-12 col-md-2 col-lg-2 pt-4 salve">
            <h5>CARMEN</h5>
            <p className="text-secondary">
              performance divisa in due parti indipendenti, a partire dal
              romanzo Non lasciarmi di Ishiguro ed altri pezzi di letteratura,
              che costruisce un percorso sul tema della morte e del trauma della
              malattia
            </p>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 p-4 lavori-image">
            <img
              src={LavoriImage1}
              alt="immagine-locandina1"
              className="img-top"
            />
            <div className="mt-4">
              <h6>HAILSHAM</h6>
              <p className="text-secondary">
                <small>Parte 1 / performance in silenzio</small>
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 p-4 lavori-image">
            <img
              src={LavoriImage2}
              alt="immagine-locandina2"
              className="img-top"
            />
            <div className="mt-4">
              <h6>CARMEN</h6>
              <p className="text-secondary">
                <small>Parte 2 / suono + voce</small>
              </p>
            </div>
          </div>
        </div>

        <div className="row g-1 mb-5 pb-5">
          <div className="col-sm-12 col-md-6 col-lg-2 pt-4"></div>

          <div className="col-sm-12 col-md-6 col-lg-5 p-4 lavori-image">
            <img
              src={LavoriImage3}
              alt="immagine-locandina3"
              className="img-top"
            />
            <div className="mt-4">
              <h6>LIBERTÀ</h6>
              <p className="text-secondary">
                <small>
                  performance / installazione sull’amore realizzata con il
                  materiale di 8 anni di laboratori e interviste <br />
                  di Maria Chiara Pederzini
                </small>
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5 p-4 lavori-image">
            <img
              src={LavoriImage4}
              alt="immagine-locandina4"
              className="img-top"
            />
            <div className="mt-4">
              <h6>CUCINA</h6>
              <p className="text-secondary">
                <small>progetto di teatro-danza</small>
              </p>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Lavori;
