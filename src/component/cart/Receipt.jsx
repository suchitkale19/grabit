import { useContext } from "react";
import Title from "../home/Title";
import ReceiptList from "./ReceiptList";
import { Link } from "react-router-dom";
import { CartContext } from "../../CartContext";

function Receipt({ button, renderProduct }) {
  const { setDirectBuy, cartProduct } = useContext(CartContext);
  const totalPrice = Math.round(
    renderProduct.reduce((acc, cur) => acc + cur.price * 90, 0),
  );
  return (
    <div className="w-[30%] h-fit py-4 rounded-xl border border-zinc-500 px-4">
      <Title name={" Receipt "} />
      <div className="h-10 text-lg flex justify-between items-center border-y px-2">
        <p>Product Name</p>
        <p>Price</p>
      </div>
      <ReceiptList renderProduct={renderProduct} />
      <div className="h-fit text-lg flex justify-between items-center border-y py-4 px-2">
        <h1>Sub-Total</h1>
        <p className="flex items-start text-3xl font-bold">
          <span className="text-lg"> ₹ </span>
          {totalPrice}
        </p>
      </div>

      {button ? (
        <Link to={cartProduct.length ? "/checkout" : "/cart"}>
          <button
            className="w-full rounded-2xl py-4 bg-[#d78b08] hover:bg-[#D97706] font-bold text-black text-2xl mt-4 "
            onClick={() => setDirectBuy(false)}
          >
            Checkout Now
          </button>
        </Link>
      ) : (
        <button className="w-full rounded-2xl py-4 bg-[#d78b08] hover:bg-[#D97706] font-bold text-black text-2xl mt-4 ">
          Proceed
        </button>
      )}
    </div>
  );
}

export default Receipt;
