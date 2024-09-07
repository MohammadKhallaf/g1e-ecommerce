import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import { CartContext } from "./store/CartContext";

import "./App.css";
import { useState } from "react";
// cart context

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCartArray) => {
      // check if the product is already in the cart
      const idx = prevCartArray.findIndex(
        (_product) => _product.title === product.title
      );
      // prevent adding the product to the cart again
      if (idx > -1) {
        const productItem = prevCartArray[idx];
        productItem.quantity = productItem.quantity + 1;
        return prevCartArray;
      } else {
        const currentProduct = product;
        currentProduct.quantity = 1;

        return [...prevCartArray, currentProduct];
      }
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Routes>
            <Route path="cart" element={<CartPage />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
