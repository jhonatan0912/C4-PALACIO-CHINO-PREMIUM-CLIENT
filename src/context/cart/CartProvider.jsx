import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
}

export const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  return <CartContext.Provider value={{ cartItems, setCartItems }}>{children}</CartContext.Provider>
}
