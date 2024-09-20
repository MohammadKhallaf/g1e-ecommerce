import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import ProductDetails from "./components/ProductDetails";
import ProtectedRoute from "./components/ProtectedRoute";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import ProductList from "./pages/ProductList";
import WishlistPage from "./pages/WishlistPage";
import AuthProvider, { useAuth } from "./store/AuthContext";
import CartProvider from "./store/CartContext";
import ProductsProvider from "./store/ProductsContext";
import WishlistProvider from "./store/WishlistContext";

import "./App.css";
import GuestLayout from "./pages/GuestLayout";
import RegisterPage from "./pages/RegisterPage";
// cart context

// change the local storage data
/*
1. new data -> strigify -> save data
2. return to save the cart state
 */

function App() {
  const { user } = useAuth();

  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <WishlistProvider>
            <BrowserRouter>
              <div className="App">
                <GuestLayout>
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
                    <Route path="register" element={<RegisterPage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="/" element={<ProductList />} />
                  </Routes>
                </GuestLayout>
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
