import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./componets/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Products2 from "./pages/Products2";
import Cart from "./pages/Cart";
import CategoryProduct from "./pages/CategoryProduct";
import SingalProduct from "./pages/SingalProduct";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/product" element={<Products/>}/>
          <Route path="/product2" element={<Products2/>}/>
          
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/category/:category" element={<CategoryProduct/>}/>


          <Route path="/products/:id" element={<SingalProduct/>}/>
          <Route path="/product2/:id" element={<SingalProduct/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
