import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import Navbar from "../../Components/Navbar/Navbar";

const HomePage: React.FC = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
};

export default HomePage;
