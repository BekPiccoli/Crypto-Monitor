import Home from "./Pages/home/index.jsx";
import BicoinData from "./Pages/btc/BicoinData.jsx";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bitcoin" element={<BicoinData />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
