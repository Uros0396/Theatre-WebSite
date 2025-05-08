import Navbar from "../../Components/Navbar/Navbar";
import brochurePDF from "../../../public/pr.nj.pdf";

const Aure: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className="row align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 text-center mt-5 p-md-5 p-lg-5 p-2">
            <p className="p-0 m-0 p-md-4 m-md-4 p-lg-4 m-lg-4 text-start p-sm-0 m-sm-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              nobis magni minima ex rem dignissimos perspiciatis asperiores
              explicabo iste tempore reiciendis recusandae, at fugit est laborum
              vitae consectetur eos illum delectus rerum quo perferendis,
              necessitatibus qui. Adipisci ex veniam omnis esse! Illum possimus
              modi voluptates quasi et aspernatur, perspiciatis consectetur
              impedit fuga sapiente minus suscipit cupiditate neque eius
              recusandae? Recusandae nam eligendi sit cumque, reprehenderit
              maxime deserunt distinctio fuga ea quasi vitae, saepe
              necessitatibus adipisci praesentium laboriosam culpa nobis ex
              dolorem ratione cupiditate officiis animi. Asperiores
              exercitationem facere temporibus. Cum, eligendi quod suscipit
              dolorum officia facere. Quasi dolor voluptatum incidunt!
            </p>
            <a href={brochurePDF} download className="btn btn-primary">
              Scarica il PDF
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aure;
