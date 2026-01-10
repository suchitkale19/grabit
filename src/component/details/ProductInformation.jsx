function ProductInformation({ product }) {
  return (
    <div className="flex flex-col gap-5 justify-center text-lg">
      <h1 className="text-2xl font-semibold">
        {product.brand ? product.brand + "'s" : ""} {product.title} |{" "}
        {product.category}
      </h1>
      <p className="text-xl">
        {"⭐".repeat(product.rating)}☆ {product.rating} (
        {Math.round(product.price * 10)} ratings)
      </p>

      <div className="flex items-center gap-3 text-3xl text-amber-500 font-bold">
        ₹ {Math.round(product.price * 90)}{" "}
        <h2 className="text-sm text-zinc-400">
          M.R.P:
          <span className="line-through pl-1">
            ₹
            {Math.round(
              (product.price * 90) / ((100 - product.discountPercentage) / 100)
            )}
          </span>
        </h2>
      </div>

      <p>
        Up to <b>{product.discountPercentage}</b>% Off
      </p>
      <p>{product.shippingInformation.replace("Ships", "Arrives")}</p>

      <p>{product.description}</p>
      <div className="flex gap-5 justify-between">
        <p className="w-fit border p-3 hover:bg-zinc-900 transition-all cursor-pointer font-bold rounded-xl border-zinc-900 bg-zinc-950 text-center">
          Hurry⚡ Only {product.stock} left — Grab yours before it's gone
        </p>
        <p className="w-fit border p-3 hover:bg-zinc-900 transition-all cursor-pointer font-bold rounded-xl border-zinc-900 bg-zinc-950 text-center">
          Limited Bulk Deal — Buy {product.minimumOrderQuantity}+ & Save Extra
          {" " + Math.round(product.discountPercentage * 3)}%
        </p>
      </div>
    </div>
  );
}

export default ProductInformation;
