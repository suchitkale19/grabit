import { useContext } from "react";
import { UserContext } from "../UserContext";

function OrderPlaced() {
  const { loginUser } = useContext(UserContext);
  return (
    <div className=" h-screen w-full bg-zinc-950 flex flex-col items-center justify-center  text-3xl text-white">
      <img
        className="h-96  rounded-full relative"
        src="/src/assets/orderPlaced2.png"
        alt="orderPlaced"
      />
      <div className="absolute top-134 text-center ">
        <h1>
          🎉 Congratulations{" "}
          {loginUser ? loginUser.Fullname.split(" ")[0] : "UNKNOWN"} 🎉
        </h1>
        <p className="text-2xl text-zinc-200 mt-4">
          🎉 Your order has been successfully placed 🎉
        </p>
      </div>
    </div>
  );
}

export default OrderPlaced;
