import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ChiSiamoImage from "../../assets/about.png";
import "./ChiSiamo.css";

const ChiSiamo: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
      </div>

      <div className="img-wrapper-chi-siamo">
        <img
          src={ChiSiamoImage}
          alt="chi-siamo-image"
          className="img-chi-siamo"
        />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4>ABOUT</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 mt-lg-4">
            <p>
              Siamo un collettivo artistico multidisciplinare. La nostra ricerca
              attraversa il teatro, la performance e l’installazione,
              allargandosi a opere visive, indagini collettive, sul campo, di
              raccolta di testimonianze e di archivio.{" "}
            </p>
            <p>
              <em>
                Maria Chiara Pederzini, con Nicola Andretta, Giulia Bellentani,
                Rita Bosello, Anna Briotto, Sofia Carlesso, Beatrice Centenaro,
                Emiliano Daniel, Stefano Lattanzio, Alice Spisa.{" "}
              </em>
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4>BIO</h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 mt-lg-4">
            <p>
              <strong>2025</strong> Carmen è in residenza a DAS Collagene <br />
              residenza a Nidoramai di Alessandro e Chiara Businaro <br />{" "}
              ospite a La Conigliera di Anagoor
            </p>
            <p>
              <strong>2024</strong> vince il bando CURA 2024 <br /> presenta
              un’apertura di pubblico a Caracol Vicenza
            </p>
            <hr />
            <p>
              <strong> 2019 - 2024</strong> Libertà (esercitazioni), in fase di
              studio, <br /> è in residenza a DAS Collagene <br /> presenta un
              frammento dello studio in Triennale di Milano dentro al progetto{" "}
              <br /> Nascondere di Romeo Castellucci <br /> OTSE di Pietro
              Valenti (ex direttore di ERT) , Melpignano, Lecce, <br />{" "}
              DRUŠTVENI CENTAR ROJC Pola, Croazia, C3 (VR) <br />
              Akasa Cittadella (PD) <br /> in residenza a LEMMING, Rovigo <br />{" "}
              a Parterre Tremonti di Sotto (PN) <br /> a La Piccionaia <br /> a
              Fabbrica del Vapore insieme a Fattoria Vittadini
            </p>
            <hr />
            <p>
              <strong> 2019 - 2024</strong> Black Holes è presentato in
              anteprima per il TSV al Teatro delle <br /> Maddalene con la
              collaborazione di Neurologia dell’Ospedale di Padova con cui{" "}
              <br />
              presenta diverse aperture di pubblico
            </p>
            <hr />
            <p>
              <strong> 2019 </strong> Cucina, in residenza con La Piccionaia
            </p>
            <hr />
            <p>
              <strong> 2017 </strong> Furore, ispirato al romanzo di Steinbeck,
              è tra i sei progetti selezionati per <br /> Biennale Teatro da
              Antonio Latella
            </p>
            <hr />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChiSiamo;
