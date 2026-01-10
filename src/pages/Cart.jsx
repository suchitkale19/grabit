import { useContext } from "react";
import CartProductCard from "../component/cart/CartProductCard";
import Receipt from "../component/cart/Receipt";
import { DataContext } from "../DataContext";

function Cart() {
  const { cartProduct } = useContext(DataContext);
  return (
    <div className="h-fit w-full bg-black ubuntu text-white flex justify-center gap-4 p-10">
      <CartProductCard />
      <Receipt button={true} renderProduct={cartProduct} />
    </div>
  );
}

export default Cart;
