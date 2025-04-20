import homepageImage from "../../assets/pixlr-image-generator-8d794292-b3e5-4181-82b3-7a6ea1209953.png";
import "./Main.css";

const Main: React.FC = () => {
  return (
    <main className="row">
      <div className="col-lg-12 d-flex justify-content-center mt-5 pt-5 pb-4">
        <img
          src={homepageImage}
          alt="homepage-image"
          className="img-homepage"
        />
      </div>
    </main>
  );
};

export default Main;
