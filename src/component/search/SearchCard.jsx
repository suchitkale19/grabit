import ButtonSvg from "../home/ButtonSvg";

function SearchCard({ item }) {
  return (
    <div className="w-full h-64 text-xl bg-[url(/src/assets/bg3.svg)] bg-cover bg-center border border-zinc-950 rounded-2xl flex gap-5  p-6">
      <div className=" h-auto w-auto flex justify-center items-center">
        <img
          className="h-52 rounded-2xl shadow-[0_12px_30px_rgba(255,255,255,0.08)]"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>
      <div className="flex justify-between w-[75%] ">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-extralight">{item.title}</h1>
          <p>
            {"⭐".repeat(item.rating)}☆ {item.rating} (
            {Math.round(item.price * 10)} ratings)
          </p>
          <div className="flex items-center gap-3 text-3xl font-bold">
            ₹ {Math.round(item.price * 90)}{" "}
            <h2 className="text-xl text-zinc-400">
              M.R.P:
              <span className="line-through pl-1">
                ₹
                {Math.round(
                  (item.price * 90) / ((100 - item.discountPercentage) / 100)
                )}
              </span>
            </h2>
          </div>
          <p className="w-fit h-fit text-lg font-bold rounded-lg bg-[#224514] p-1">
            {Math.round(item.discountPercentage)}% Off
          </p>
          <p>⚡ Only {item.stock} left in stock</p>
          <p className="h-fit w-fit p-1 bg-[#1d2a1d] rounded-lg">
            🚚 Free delivery -{" "}
            {item.shippingInformation.replace("Ships", "Arrives")}
          </p>
        </div>
        <div className="flex flex-col justify-between items-end">
          <p className="w-20 h-fit text-xl text-center text-black font-bold rounded-bl-3xl rounded-tr-3xl bg-[#FFD166] p-1">
            {Math.round(item.discountPercentage) < 10
              ? "0" + Math.round(item.discountPercentage)
              : Math.round(item.discountPercentage)}
            % Off
          </p>
          <ButtonSvg
            name={"Buy Now"}
            height={22}
            width={64}
            textHeight={"xl"}
            highlight={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
