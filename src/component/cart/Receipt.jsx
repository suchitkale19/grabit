import { useContext } from "react";
import Title from "../home/Title";
import ReceiptList from "./ReceiptList";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { CartContext } from "../../CartContext";

function Receipt({ button, renderProduct, paymentMethod }) {
  const navigate = useNavigate();
  const { setDirectBuy, cartProduct } = useContext(CartContext);
  const { login, loginUser, usersList, saveList } = useContext(UserContext);

  function setOrders() {
    console.log("working");
    const includeOrder = usersList.map((user) =>
      user.Fullname === loginUser.Fullname
        ? {
            ...user,
            orders: [
              ...(user.orders || []),
              ...(Array.isArray(renderProduct)
                ? renderProduct
                : [renderProduct]),
            ],
          }
        : user,
    );
    saveList(includeOrder);
  }

  const totalPrice = Array.isArray(renderProduct)
    ? Math.round(
        renderProduct.reduce(
          (acc, cur) => acc + cur.price * (90 * (cur.quantityAdded || 1)),
          0,
        ),
      )
    : Math.round(renderProduct.price * 90);
  return (
    <div className="w-[30%] h-fit py-4 text-center rounded-xl border border-zinc-500 px-4">
      <Title name={" Receipt "} />
      {button === false &&
        (login ? (
          <h1
            className={`${paymentMethod === "" ? "text-red-800" : "text-white"} text-xl pb-4`}
          >
            {paymentMethod === ""
              ? "You haven't selected payment option yet"
              : `You are paying using ${paymentMethod}`}
          </h1>
        ) : (
          <h1 className="text-red-800 text-xl pb-4">
            You haven't logged in yet
          </h1>
        ))}

      <div className="h-10 text-lg flex justify-between items-center border-y px-2">
        <p>Product Name</p>
        <div className="flex gap-20">
          <p>Quantity</p>
          <p>Price</p>
        </div>
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
        <button
          className="w-full rounded-2xl py-4 bg-[#d78b08] hover:bg-[#D97706] font-bold text-black text-2xl mt-4 "
          onClick={() => {
            paymentMethod !== ""
              ? navigate("/order_placed")
              : console.log("Login or payment pending");
            setOrders();
          }}
        >
          Proceed
        </button>
      )}
    </div>
  );
}

export default Receipt;
