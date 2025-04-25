import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";

const Supportaci: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar />
        <div className="row text-center">
          <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
            <p>
              Qua ci sara' l' IBAN se ho capito bene? e altre cose che mi
              spiegherai
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Supportaci;
