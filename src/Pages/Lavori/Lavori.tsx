import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
//import LavoriImage1 from "../../assets/1. WORKS HAILSHAM.png";
//import LavoriImage2 from "../../assets/2. WORKS CARMEN.png";
//import LavoriImage3 from "../../assets/3. WORKS LIBERTà.png";
//import LavoriImage4 from "../../assets/4. WORKS CUCINA.png";
import "./Lavori.css";
import { useTranslation } from "react-i18next";

const Lavori: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid ciao mt-4">
        <Navbar />
        <div className="row mt-5 ps-5 cranberry">
          <div className="col-sm-12 col-md-2 col-lg-2 pt-2 pe-0 salve">
            <h5 dangerouslySetInnerHTML={{ __html: t("works.title1") }}></h5>
            <p
              dangerouslySetInnerHTML={{ __html: t("works.paragraph1") }}
              className="text-secondary"
            ></p>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 p-2 lavori-image">
            <div className="ps-5">
              <img
                src="https://res.cloudinary.com/dhoq8vx2k/image/upload/f_auto,q_auto,w_1000,c_fill,g_auto/v1747150076/ROBOTLIFE/1.png"
                alt="ROBOTLIFE Image"
                loading="lazy"
              />

              <div className="mt-4">
                <h6
                  dangerouslySetInnerHTML={{ __html: t("works.title2") }}
                ></h6>
                <p className="text-secondary ciaosmall">
                  <small
                    dangerouslySetInnerHTML={{ __html: t("works.paragraph2") }}
                  ></small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-5 col-lg-5 p-2 lavori-image">
            <div className="ps-5">
              {" "}
              <img
                src="https://res.cloudinary.com/dhoq8vx2k/image/upload/f_auto,q_auto,w_1000,c_fill,g_auto/v1747126798/ROBOTLIFE/2.png"
                alt=""
                loading="lazy"
              />
              <div className="mt-4">
                <h6
                  dangerouslySetInnerHTML={{ __html: t("works.title3") }}
                ></h6>
                <p className="text-secondary ciaosmall">
                  <small
                    dangerouslySetInnerHTML={{ __html: t("works.paragraph3") }}
                  ></small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-1 mb-5 pb-5 ps-5 banane">
          <div className="col-sm-12 col-md-6 col-lg-2 d-none d-lg-block"></div>

          <div className="col-sm-12 col-md-6 col-lg-5 pt-2 lavori-image">
            <div className="ps-5">
              <img
                src="https://res.cloudinary.com/dhoq8vx2k/image/upload/f_auto,q_auto,w_1000,c_fill,g_auto/v1747126811/ROBOTLIFE/3.png"
                alt="LIBERTA' LOCANDINA DI OPERE"
                loading="lazy"
              />

              <div className="mt-4">
                <h6
                  dangerouslySetInnerHTML={{ __html: t("works.title4") }}
                ></h6>
                <p className="text-secondary ciaosmall">
                  <small
                    dangerouslySetInnerHTML={{
                      __html: t("works.paragraph4"),
                    }}
                  ></small>
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5 p-2 lavori-image">
            <div className="ps-5">
              <img
                src="https://res.cloudinary.com/dhoq8vx2k/image/upload/f_auto,q_auto,w_1000,c_fill,g_auto/v1747126826/ROBOTLIFE/4.png"
                alt="Robotic Life"
                loading="lazy"
              />

              <div className="mt-4">
                <h6
                  dangerouslySetInnerHTML={{ __html: t("works.title5") }}
                ></h6>
                <p className="text-secondary ciaosmall">
                  <small
                    dangerouslySetInnerHTML={{
                      __html: t("works.paragraph5"),
                    }}
                  ></small>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Lavori;
