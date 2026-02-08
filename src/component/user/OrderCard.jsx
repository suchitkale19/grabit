import { Link } from "react-router-dom";

function OrderCard({ order }) {
  return (
    <div className="h-fit w-64 border rounded-2xl p-2 flex flex-col justify-center items-center bg-[url(/src/assets/bg3.svg)] bg-cover border-zinc-900 select-none cursor-grab relative">
      <div className="w-20 h-fit text-xl  text-center text-black font-bold rounded-bl-3xl rounded-tr-3xl bg-[#FFD166] p-1 top-2 right-2 absolute">
        {Math.round(order.discountPercentage) < 10
          ? "0" + Math.round(order.discountPercentage)
          : Math.round(order.discountPercentage)}
        % Off
      </div>
      <Link to={`/product/${order.id}`} key={order.id}>
        <img
          className="h-48 cursor-pointer "
          src={order.thumbnail}
          alt={order.title}
        />
      </Link>
      <div className="w-full h-auto px-6 text-xl">
        <h2 className="cursor-pointer  font-bold">{order.title}</h2>
        <p>
          ⭐ <strong>{order.rating}</strong>/5
        </p>
        <p>
          ₹{" "}
          <b className="cursor-pointer text-xl   font-bold">
            {Math.round(order.price * 90)}
          </b>{" "}
          <span className="line-through pl-1">
            ₹
            {Math.round(
              (order.price * 90) / ((100 - order.discountPercentage) / 100),
            )}
          </span>
        </p>
      </div>
    </div>
  );
}

export default OrderCard;
