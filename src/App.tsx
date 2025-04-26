import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage/HomePage";
import ChiSiamo from "./Pages/ChiSiamo/ChiSiamo";
import Lavori from "./Pages/Lavori/Lavori";
import Studio from "./Pages/Studio/Studio";
import Aure from "./Pages/Aure/Aure";
import Contatti from "./Pages/Contatti/Contatti";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ChiSiamo" element={<ChiSiamo />} />
        <Route path="/Lavori" element={<Lavori />} />
        <Route path="/Studio" element={<Studio />} />
        <Route path="/Aure" element={<Aure />} />
        <Route path="/Contatti" element={<Contatti />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
