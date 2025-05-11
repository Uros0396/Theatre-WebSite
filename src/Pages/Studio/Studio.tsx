import Navbar from "../../Components/Navbar/Navbar";
import StudioImage from "../../assets/1. STUDIO BANNER.png";
import Footer from "../../Components/Footer/Footer";
import "./Studio.css";
import { useTranslation } from "react-i18next";

const Studio: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-fluid mt-4">
        <Navbar />
      </div>

      <div className="img-wrapper-chi-siamo mt-4">
        <img src={StudioImage} alt="chi-siamo-image" className="img-studio" />
      </div>

      <div className="container-fluid">
        <div className="row testo">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4 dangerouslySetInnerHTML={{ __html: t("studio.title1") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 ">
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph1") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph2") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph3") }}></p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4 dangerouslySetInnerHTML={{ __html: t("studio.title2") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 studio">
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph4") }}></p>
            <div className="div-timeline">
              <span className="timeline">1</span>
              <hr />
            </div>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph5") }}></p>
            <div className="div-timeline">
              <span className="timeline">2</span>
              <hr />
            </div>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph6") }}></p>
            <div className="div-timeline">
              <span className="timeline">3</span>
              <hr />
            </div>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph7") }}></p>
            <div className="div-timeline">
              <span className="timeline">4</span>
              <hr />
            </div>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph8") }}></p>
            <div className="div-timeline">
              <span className="timeline">5</span>
              <hr />
            </div>
            <p dangerouslySetInnerHTML={{ __html: t("studio.paragraph9") }}></p>
            <div className="div-timeline">
              <span className="timeline">6</span>
              <hr />
            </div>
            <p
              dangerouslySetInnerHTML={{ __html: t("studio.paragraph10") }}
            ></p>
            <div className="div-timeline">
              <span className="timeline">7</span>
              <hr />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Studio;
