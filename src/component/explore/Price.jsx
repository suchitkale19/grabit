import { useContext } from "react";
import { DataContext } from "../../DataContext";

function Price({ setOption }) {
  const { category, setCategory, allItems } = useContext(DataContext);
  const filterItems = category.length === 0 ? allItems : category;
  return (
    <div
      className="h-fit w-fit p-4 flex flex-col gap-2 absolute top-39 left-106 border   bg-black border-zinc-800 rounded-xl"
      onMouseEnter={() => setOption("Price")}
      onMouseLeave={() => setOption(null)}
    >
      {[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000].map((number) => (
        <h1
          className="h-fit w-fit py-1 px-2 border text-center  text-xl font-bold rounded border-zinc-800 hover:bg-zinc-900"
          key={number}
          onClick={() =>
            setCategory(
              filterItems.filter((product) => {
                const price = product.price * 90;
                return price >= number && price < number + 10000;
              }),
            )
          }
        >
          {number}% - {number + 10000}%
        </h1>
      ))}
    </div>
  );
}

export default Price;
