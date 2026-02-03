import { Link } from "react-router-dom";
import ButtonSvg from "./ButtonSvg";
import { useContext } from "react";
import { CartContext } from "../../CartContext";

function Card({ item }) {
  const { cartProduct, setCartProduct, setBuyProduct, setDirectBuy } =
    useContext(CartContext);
  return (
    <div className="h-90 w-64 border rounded-2xl flex flex-col justify-center items-center bg-[url(/src/assets/bg3.svg)] bg-cover border-zinc-900 select-none cursor-grab relative">
      <div className="w-20 h-fit text-xl text-center text-black font-bold rounded-bl-3xl rounded-tr-3xl bg-[#FFD166] p-1 top-2 right-2 text- absolute">
        {Math.round(item.discountPercentage)}%
      </div>
      <Link to={`/product/${item.id}`} key={item.id}>
        <img
          className="h-48 cursor-pointer "
          src={item.thumbnail}
          alt={item.title}
        />
      </Link>
      <div className="w-full h-auto px-6">
        <h2 className="cursor-pointer font-bold">{item.title}</h2>
        <p>
          ⭐ <strong>{item.rating}</strong>/5
        </p>
        <p>
          ₹{" "}
          <b className="cursor-pointer text-xl   font-bold">
            {Math.round(item.price * 90)}
          </b>{" "}
          <span className="line-through pl-1">
            ₹
            {Math.round(
              (item.price * 90) / ((100 - item.discountPercentage) / 100),
            )}
          </span>
        </p>
        <div className="flex gap-2 mt-2">
          <Link to={"/checkout"}>
            <div
              onClick={() => {
                setBuyProduct(item);

                setDirectBuy(true);
              }}
            >
              <ButtonSvg
                name={"Buy Now"}
                height={10}
                width={22}
                textHeight={"md"}
                highlight={true}
              />
            </div>
          </Link>
          <Link to={"/cart"}>
            <div onClick={() => setCartProduct([...cartProduct, item])}>
              <ButtonSvg
                name={"Add To Cart"}
                height={10}
                width={22}
                textHeight={"md"}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
