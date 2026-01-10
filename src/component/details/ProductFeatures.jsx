function ProductFeatures({ product }) {
  return (
    <div className="h-auto w-full flex justify-center items-center gap-6 ">
      {[
        { key: "Free Delivery" },
        {
          key: "Replacement",
          label: product.returnPolicy,
        },
        {
          key: "Warranty",
          label: product.warrantyInformation || "Warranty Available",
        },
        { key: "Top Brand" },
        { key: "Secure Transaction" },
      ].map(({ key, label }) => (
        <div
          className="h-32 w-fit p-2 gap-1 flex flex-col justify-center items-center text-sm font-bold"
          key={key}
        >
          <img className="h-16" src={`/src/assets/${key}.svg`} />
          <p className="text-center">{label ? label : key}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductFeatures;
