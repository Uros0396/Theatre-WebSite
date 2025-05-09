import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="mt-4">
        <Navbar />
      </div>
      <Main />
    </div>
  );
};

export default HomePage;
