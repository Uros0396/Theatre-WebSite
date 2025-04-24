import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import StudioImage from "../../assets/studioTeatrale.jpg";

const Studio: React.FC = () => {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <Navbar />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center mt-5 pt-5">
            <img src={StudioImage} alt="chi-siamo-image" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 p-5">
            <h3>STUDIO</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              eligendi nam dolorum maxime molestiae! Expedita magnam est
              repellendus dolore aliquam. In soluta aspernatur cum, magnam,
              officiis expedita dolores corporis, sed esse blanditiis est!
              Labore corrupti necessitatibus vitae facere incidunt cumque esse
              rem excepturi, maiores autem laborum, quod explicabo quasi
              sapiente repellat porro consequuntur, consectetur aspernatur dicta
              nostrum nemo quisquam cupiditate suscipit? Ab nesciunt voluptatem
              nemo qui ea. Suscipit aspernatur enim doloremque aliquid id
              soluta, laborum dolor dolorum sunt optio pariatur, tempore
              deserunt impedit rem voluptatem quaerat. Voluptatum eum odio
              placeat accusamus architecto at doloremque, saepe autem. Deleniti
              laudantium molestias mollitia quia quaerat ipsa dolorum
              accusantium voluptate unde soluta, id debitis atque dolorem nobis
              voluptatem eaque repudiandae. Ullam, tempora accusamus
              perspiciatis est ipsam dolore, optio expedita sint reiciendis
              labore provident laborum. Eveniet accusamus delectus nobis
              incidunt beatae. Quisquam, enim perspiciatis. Autem laboriosam
              impedit eum sapiente ipsum qui cum provident similique nihil?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Studio;
