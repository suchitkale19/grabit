function ProductImages({ product, image, setImage }) {
  return (
    <div className="h-auto w-[20%] p-2 flex flex-col justify-center items-start  gap-4 ">
      {product.images.map((pic) => (
        <img
          className={`w-25 border ${
            image === pic ? "border-amber-400" : "border-zinc-800"
          } p-1 rounded-2xl cursor-pointer`}
          onClick={() => setImage(pic)}
          src={pic}
          key={pic}
        />
      ))}
    </div>
  );
}

export default ProductImages;
