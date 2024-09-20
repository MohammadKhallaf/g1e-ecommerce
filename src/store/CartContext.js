import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

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
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
