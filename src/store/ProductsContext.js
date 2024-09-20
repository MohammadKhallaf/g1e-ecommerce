import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export const useProducts = () => useContext(ProductsContext);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const updateProducts = (newProducts) => {
    setProducts(newProducts);
  };
  // fetch ()
  // get data -> set Products
  // localhost:5000/api/products

  // change shape of data -> in one place

  useEffect(() => {
    axios.get("http://localhost:5000/api/products").then((response) => {
      const backendData = response.data;

      const frontendData = backendData.map((item) => {
        return {
          ...item,
          id: item._id,
          img: item.image,
          title: item.name,
          desc: item.description,
        };
      });
      setProducts(frontendData);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
