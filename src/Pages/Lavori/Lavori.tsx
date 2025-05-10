import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import LavoriImage1 from "../../assets/1. WORKS HAILSHAM.png";
import LavoriImage2 from "../../assets/2. WORKS CARMEN.png";
import LavoriImage3 from "../../assets/3. WORKS LIBERTà.png";
import LavoriImage4 from "../../assets/4. WORKS CUCINA.png";
import "./Lavori.css";
import { useTranslation } from "react-i18next";

const Lavori: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid ciao mt-4">
        <Navbar />
        <div className="row g-1 mt-5">
          <div className="col-sm-12 col-md-2 col-lg-2 pt-4 salve">
            <h5 dangerouslySetInnerHTML={{ __html: t("works.title1") }}></h5>
            <p
              dangerouslySetInnerHTML={{ __html: t("works.paragraph1") }}
              className="text-secondary"
            ></p>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 p-4 lavori-image">
            <img
              src={LavoriImage1}
              alt="immagine-locandina1"
              className="img-top"
            />
            <div className="mt-4">
              <h6 dangerouslySetInnerHTML={{ __html: t("works.title22") }}></h6>
              <p className="text-secondary">
                <small
                  dangerouslySetInnerHTML={{ __html: t("works.paragraph2") }}
                ></small>
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
              <h6 dangerouslySetInnerHTML={{ __html: t("works.title3") }}></h6>
              <p className="text-secondary">
                <small
                  dangerouslySetInnerHTML={{ __html: t("works.paragraph3") }}
                ></small>
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
              <h6 dangerouslySetInnerHTML={{ __html: t("works.title4") }}></h6>
              <p className="text-secondary">
                <small
                  dangerouslySetInnerHTML={{ __html: t("works.paragraph4") }}
                ></small>
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
              <h6 dangerouslySetInnerHTML={{ __html: t("works.title5") }}></h6>
              <p className="text-secondary">
                <small
                  dangerouslySetInnerHTML={{ __html: t("works.paragraph5") }}
                ></small>
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
