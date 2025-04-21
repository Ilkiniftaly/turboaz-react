import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Cars from "./Components/Cars/Cars";
import CarDetalist from "./Pages/CarDetalist/CarDetalist";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cars />}></Route>
        <Route path="/CarDetalist/:id" element={<CarDetalist />}></Route>
      </Routes>
    </>
  );
}

export default App;
