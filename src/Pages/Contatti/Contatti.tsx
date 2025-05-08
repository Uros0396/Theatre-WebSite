import Navbar from "../../Components/Navbar/Navbar";
import "./Contatti.css";

const Contatti: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex flex-column mt-5">
            <div className="mt-5">
              <span>Facebook:</span>
              <a href="" className="ms-2">
                Nome Compagnia
              </a>
            </div>
            <div className="mt-2">
              <span>Instagram:</span>
              <a href="" className="ms-2">
                @Nome_Compagnia
              </a>
            </div>
            <div className="mt-2">
              <span>Vimeo:</span>
              <a href="" className="ms-2">
                Nome Compagnia
              </a>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
            <h3>Nome Compagnia</h3>
            <a href="" className="">
              compagniateatrale@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contatti;
