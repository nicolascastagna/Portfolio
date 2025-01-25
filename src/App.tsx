import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
