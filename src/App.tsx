import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Aqui será incluso a rota para categorias assim que estiver pronta */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
