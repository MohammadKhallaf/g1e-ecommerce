import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import CartPage from "./pages/CartPage";
import ProductList from "./pages/ProductList";
import { CartContext } from "./store/CartContext";

import "./App.css";
import { useEffect, useState } from "react";
import WishlistPage from "./pages/WishlistPage";
import ProductDetails from "./components/ProductDetails";
// cart context

// change the local storage data
/*
1. new data -> strigify -> save data
2. return to save the cart state
 */

function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    // I should not add quantity
    // product should be added only one time
    setWishlist((prevWishlistArray) => {
      // search in the array ->
      const idx = prevWishlistArray.findIndex((item) => {
        const condition = item.title === product.title;
        return condition;
        // return true | false
      });
      // check if the product is already exists
      // idx [0,1,2,..., length]
      if (idx > -1) {
        // found
        localStorage.setItem("wishlist", JSON.stringify(prevWishlistArray));
        return prevWishlistArray;
      } else {
        localStorage.setItem(
          "wishlist",
          JSON.stringify([...prevWishlistArray, product])
        );
        return [...prevWishlistArray, product];
      }
    });
  };
  const removeFromWishlist = (product) => {
    setWishlist((prevsArray) => {
      const newList = prevsArray.filter((item) => {
        const condition = item.title !== product.title;
        return condition;
      });
      localStorage.setItem("wishlist", JSON.stringify(newList));
      return newList;
    });
  };

  // -----------------------
  const addToCart = (product) => {
    //a. save data to local storage
    setCart((prevCartArray) => {
      // check if the product is already in the cart
      const idx = prevCartArray.findIndex(
        (_product) => _product.title === product.title
      );
      // prevent adding the product to the cart again
      if (idx > -1) {
        // found the item
        const productItem = prevCartArray[idx];
        productItem.quantity = productItem.quantity + 1;

        // change in the array
        // then save the new array to the local storage
        localStorage.setItem("cart", JSON.stringify(prevCartArray));
        return prevCartArray; // return -> save new data to the state (cart)
      } else {
        // new item
        const currentProduct = product;
        currentProduct.quantity = 1;

        localStorage.setItem(
          "cart",
          JSON.stringify([...prevCartArray, currentProduct])
        );

        return [...prevCartArray, currentProduct];
      }
    });
  };

  const removeFromCart = (product) => {
    setCart((prevCartArray) => {
      const idx = prevCartArray.findIndex(
        (_product) => _product.title === product.title
      );
      // prevent adding the product to the cart again
      if (idx > -1) {
        const newCartItems = cart.filter(
          (_product) => _product.title !== product.title
        );
        localStorage.setItem("cart", JSON.stringify(newCartItems));
        return newCartItems;
      } else {
        localStorage.setItem("cart", JSON.stringify(prevCartArray));
        return prevCartArray;
      }
    });
  };

  useEffect(() => {
    // initial render -> get the first data from localstorage
    const cartLocalState = localStorage.getItem("cart");
    if (cartLocalState) {
      const cart = JSON.parse(cartLocalState);
      setCart(cart);
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    // ---------------------
    const wishlistLocalState = localStorage.getItem("wishlist");
    if (wishlistLocalState) {
      const wishlist = JSON.parse(wishlistLocalState);
      setWishlist(wishlist);
    } else {
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <CustomNavbar />
          <Routes>
            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="wishlist" element={<WishlistPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="/" element={<ProductList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;
