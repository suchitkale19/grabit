function Price() {
  return (
    <div className="h-fit w-fit p-4 flex flex-col gap-2 absolute top-39 left-106 border   bg-black border-zinc-800 rounded-xl">
      {[
        "₹0 - ₹5000",
        "₹5000 - ₹10000",
        "₹10000 - ₹20000",
        "₹20000 - ₹40000",
        "₹40000 - ₹100000",
      ].map((number) => (
        <h1
          className="h-fit w- py-1 px-2 border text-center  text-xl font-bold rounded border-zinc-800 hover:bg-zinc-900"
          key={number}
        >
          {number}
        </h1>
      ))}
    </div>
  );
}

export default Price;
