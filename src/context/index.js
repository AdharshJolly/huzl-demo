import { createContext, useContext, useEffect, useState } from "react";
import data from "./productData.json";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    loadProducts();
    loadCart();

    // localStorage.clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadProducts() {
    const localData = localStorage.getItem("products");
    if (localData) {
      setProducts(JSON.parse(localData));
      return;
    }

    setProducts(data).then(() => {
      localStorage.setItem("products", JSON.stringify(products));
    });
  }

  async function loadCart() {
    const localData = localStorage.getItem("cart");
    if (localData) {
      setCart(JSON.parse(localData));
      return;
    }

    setCart([]).then(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  }

  return (
    <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
      {children}
    </ProductContext.Provider>
  );
};
