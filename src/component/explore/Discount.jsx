import { useContext } from "react";
import { DataContext } from "../../DataContext";

function Discount({ setOption }) {
  const { category, setCategory, allItems } = useContext(DataContext);
  const filterItems = category.length === 0 ? allItems : category;
  return (
    <div
      className="h-fit w-fit p-4 flex flex-col gap-2 absolute top-39 left-139 border   bg-black border-zinc-800 rounded-xl"
      onMouseEnter={() => setOption("Discount")}
      onMouseLeave={() => setOption(null)}
    >
      {["0% - 10%", "10% - 20%", "20% - 30%", "30% - 40%", "40% - 50%"].map(
        (number) => (
          <h1
            className="h-fit w-fit py-1 px-2 border text-center  text-xl font-bold rounded border-zinc-800 hover:bg-zinc-900"
            key={number}
            onClick={() =>
              setCategory(
                filterItems.filter(
                  (product) => Math.round(product.rating) === number //fix it rem
                )
              )
            }
          >
            {number}
          </h1>
        )
      )}
    </div>
  );
}

export default Discount;
