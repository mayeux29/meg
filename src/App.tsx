import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Categories from "./pages/Categories/Categories";
import About from "./pages/About/About";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Checkout from "./pages/Checkout/Checkout";
import Cart from "./pages/Cart/Cart";

import Admin from "./admin/Admin"

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Products />} />
        <Route path="/categorias" element={<Categories />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/cart" element={<Cart />} />
        
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <a
        href="https://wa.me/549XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        style={{
          position: "fixed",
          right: "20px",
          bottom: "20px",
          width: "56px",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#25D366",
          color: "#fff",
          borderRadius: "50%",
          textDecoration: "none",
          zIndex: 99999,
          boxSizing: "border-box",
          boxShadow: "0 4px 12px rgba(0,0,0,0.18)"
        }}
      >
        <FaWhatsapp size={30} />
      </a>
    </BrowserRouter>
  );
}

export default App;