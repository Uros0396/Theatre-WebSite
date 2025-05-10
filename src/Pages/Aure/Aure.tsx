import Navbar from "../../Components/Navbar/Navbar";
import AureImage from "../../assets/4. AURE BANNER.png";
import Footer from "../../Components/Footer/Footer";
import "./Aure.css";
import { useTranslation } from "react-i18next";

const Aure: React.FC = () => {
  const { t } = useTranslation();
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
            <h4 dangerouslySetInnerHTML={{ __html: t("aure.title1") }}></h4>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-7 p-2 p-md-5 p-lg-5 mb-2">
            <p dangerouslySetInnerHTML={{ __html: t("aure.paragraph1") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t("aure.paragraph2") }}></p>
            <p dangerouslySetInnerHTML={{ __html: t("aure.paragraph3") }}></p>
            <a
              href="AURE 25_CARNE VIVA.pdf"
              download
              className="text-danger text-decoration-underline"
            >
              <h5
                dangerouslySetInnerHTML={{ __html: t("aure.title2") }}
                className="text-danger mt-5"
              ></h5>
            </a>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Aure;
