import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CustomNavbar from "./components/CustomNavbar";
import "./App.css";
import ProductCard from "./components/ProductCard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductList from "./pages/ProductList";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <Routes>
          <Route path="cart" element={<CartPage />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
