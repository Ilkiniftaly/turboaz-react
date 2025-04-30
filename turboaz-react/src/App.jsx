import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Cars from "./Components/Cars/Cars";
import CarDetalist from "./Pages/CarDetalist/CarDetalist";
import Form from "./Components/Forn/Form";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/CarDetalist/:id" element={<CarDetalist />} />
        <Route path="/autos/new" element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
