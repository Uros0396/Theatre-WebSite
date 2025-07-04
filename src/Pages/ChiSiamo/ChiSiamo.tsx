import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import "./ChiSiamo.css";
import { useTranslation } from "react-i18next";

const ChiSiamo: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="container-fluid mt-4">
        <Navbar />
      </div>

      <div className="img-wrapper-chi-siamo mt-4">
        <img
          src="https://res.cloudinary.com/dhoq8vx2k/image/upload/f_auto,q_auto,w_1000,c_fill,g_auto/v1747126714/ROBOTLIFE/about.png"
          alt="chi-siamo-image"
          className="img-chi-siamo"
          loading="lazy"
        />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 p-4 p-md-5 p-lg-5">
            <h4 dangerouslySetInnerHTML={{ __html: t("about.title1") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-4 p-md-5 p-lg-4 mt-lg-5">
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }}></p>
            <p>
              <em
                dangerouslySetInnerHTML={{ __html: t("about.paragraph2") }}
              ></em>
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-4 p-md-5 p-lg-5">
            <h4
              dangerouslySetInnerHTML={{ __html: t("about.title2") }}
              className="pb-2"
            ></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-4 p-md-5 p-lg-4 mt-lg-4">
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph3") }}></p>
            <p
              className="mb-2"
              dangerouslySetInnerHTML={{ __html: t("about.paragraph4") }}
            ></p>
            <div className="div-timeline">
              <span className="timeline">5</span>
              <hr />
            </div>

            <p
              className="mt-2 mb-2"
              dangerouslySetInnerHTML={{ __html: t("about.paragraph5") }}
            ></p>
            <div className="div-timeline">
              <span className="timeline">4</span>
              <hr />
            </div>
            <p
              className="mt-2 mb-2"
              dangerouslySetInnerHTML={{ __html: t("about.paragraph6") }}
            ></p>
            <div className="div-timeline">
              <span className="timeline">3</span>
              <hr />
            </div>
            <p
              className="mt-2 mb-2"
              dangerouslySetInnerHTML={{ __html: t("about.paragraph7") }}
            ></p>
            <div className="div-timeline">
              <span className="timeline">2</span>
              <hr />
            </div>
            <p
              className="mt-2 mb-2"
              dangerouslySetInnerHTML={{ __html: t("about.paragraph8") }}
            ></p>
            <div className="div-timeline mb-5">
              <span className="timeline">1</span>
              <hr />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChiSiamo;
