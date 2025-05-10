import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ChiSiamoImage from "../../assets/about.png";
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
          src={ChiSiamoImage}
          alt="chi-siamo-image"
          className="img-chi-siamo"
        />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4 dangerouslySetInnerHTML={{ __html: t("about.title1") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 mt-lg-4">
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph1") }}></p>
            <p>
              <em
                dangerouslySetInnerHTML={{ __html: t("about.paragraph2") }}
              ></em>
            </p>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 p-2 p-md-5 p-lg-5">
            <h4 dangerouslySetInnerHTML={{ __html: t("about.title2") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 mt-lg-4">
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph3") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph4") }}></p>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph5") }}></p>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph5") }}></p>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph6") }}></p>
            <hr />
            <p dangerouslySetInnerHTML={{ __html: t("about.paragraph6") }}></p>
            <hr />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ChiSiamo;
