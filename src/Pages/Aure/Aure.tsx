import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import brochurePDF from "../../../public/pr.nj.pdf";

const Aure: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar />
        <div className="row">
          <div className="col-lg-12 text-center mt-5 p-5">
            <p className="p-5 m-5 text-start">
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
