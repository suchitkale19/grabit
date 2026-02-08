import { createContext, useState } from "react";
import Loading from "./pages/Loading";

const CartContext = createContext();

function CartProvider({ children }) {
  const [buyProduct, setBuyProduct] = useState();
  const [directBuy, setDirectBuy] = useState(true);
  const [cartProduct, setCartProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);

  return (
    <CartContext.Provider
      value={{
        cartProduct,
        setCartProduct,
        buyProduct,
        setBuyProduct,
        directBuy,
        setDirectBuy,
        quantity,
        setQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
