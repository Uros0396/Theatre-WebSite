import Navbar from "../../Components/Navbar/Navbar";
import "./Contatti.css";
import ContactsImage from "../../assets/5. FIORE CONTATTI.png";
import Footer from "../../Components/Footer/Footer";
import { useTranslation } from "react-i18next";

const Contatti: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid mt-4">
        <Navbar />
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4
              className="contacts"
              dangerouslySetInnerHTML={{ __html: t("contacts.title1") }}
            ></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 pb-lg-0">
            <div className="d-flex justify-content-between contatti">
              <div className="d-flex flex-column w-50 me-2 text-secondary">
                <p
                  className="mb-0 pb-0"
                  dangerouslySetInnerHTML={{ __html: t("contacts.paragraph1") }}
                ></p>
                <a
                  href="mailto:primoamoreperformingart@gmail.com"
                  className="text-secondary pb-5"
                  dangerouslySetInnerHTML={{ __html: t("contacts.paragraph2") }}
                ></a>

                <a
                  href="https://www.instagram.com/primoamore_performingart/"
                  className="text-secondary"
                  dangerouslySetInnerHTML={{ __html: t("contacts.paragraph3") }}
                ></a>
              </div>
              <div className="d-flex flex-column w-50 ms-2">
                <p
                  className="text-secondary mb-0 pb-0"
                  dangerouslySetInnerHTML={{ __html: t("contacts.paragraph4") }}
                ></p>
                <a
                  href=" giuliabellentani.primoamore@gmail.com"
                  className="text-secondary pb-5"
                  dangerouslySetInnerHTML={{ __html: t("contacts.paragraph5") }}
                ></a>
                <a
                  href="https://www.facebook.com/primoamoreperformingarts?locale=it_IT"
                  className="text-secondary"
                  dangerouslySetInnerHTML={{ __html: t("contacts.paragraph6") }}
                ></a>
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
            <h4 dangerouslySetInnerHTML={{ __html: t("contacts.title2") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 support">
            <p
              dangerouslySetInnerHTML={{ __html: t("contacts.paragraph7") }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: t("contacts.paragraph8") }}
            ></p>
            <p>PRIMO AMORE</p>
            <p>IBAN: IT85 E360 9201 6000 2374 4793 515</p>
            <p>BIC: QNTOITM2XXX</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Contatti;
