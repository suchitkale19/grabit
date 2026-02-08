import { useContext } from "react";
import { UserContext } from "../../UserContext";
import OrderCard from "./OrderCard";

function MyOrders() {
  const { loginUser } = useContext(UserContext);
  return (
    <div className="min-h-48 h-fit w-full grid grid-cols-3  items-center justify-center rounded-2xl border border-zinc-800 p-3 gap-3 ">
      {loginUser.orders ? (
        loginUser.orders.map((order) => (
          <OrderCard order={order} key={order.title} />
        ))
      ) : (
        <h1>No orders yet!</h1>
      )}
    </div>
  );
}

export default MyOrders;
