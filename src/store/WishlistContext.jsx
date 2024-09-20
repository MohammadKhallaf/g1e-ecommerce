import { createContext, useContext, useEffect, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export default function WishlistProvider({ children }) {
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

  useEffect(() => {
    // initial render -> get the first data from localstorage

    const wishlistLocalState = localStorage.getItem("wishlist");
    if (wishlistLocalState) {
      const wishlist = JSON.parse(wishlistLocalState);
      setWishlist(wishlist);
    } else {
      localStorage.setItem("wishlist", JSON.stringify([]));
    }
  }, []);

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
