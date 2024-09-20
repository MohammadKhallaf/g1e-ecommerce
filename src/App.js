import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductDetails from "./components/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import ProductList from "./pages/ProductList";
import WishlistPage from "./pages/WishlistPage";
import AuthProvider from "./store/AuthContext";
import CartProvider from "./store/CartContext";
import ProductsProvider from "./store/ProductsContext";
import WishlistProvider from "./store/WishlistContext";

import "./App.css";
// cart context

// change the local storage data
/*
1. new data -> strigify -> save data
2. return to save the cart state
 */

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div className="App">
                <CustomNavbar />
                <Routes>
                  <Route path="product/:id" element={<ProductDetails />} />
                  <Route path="wishlist" element={<WishlistPage />} />
                  <Route
                    path="checkout"
                    element={
                      <ProtectedRoute>
                        <CheckoutPage />
                      </ProtectedRoute>
                    }
                  />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="/" element={<ProductList />} />
                </Routes>
                <Toaster />
              </div>
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
