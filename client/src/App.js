import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./Components/Error404";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;