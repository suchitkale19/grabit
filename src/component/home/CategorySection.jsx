import { useContext } from "react";
import ButtonSvg from "./ButtonSvg";
import { DataContext } from "/src/DataContext.jsx";

function CategorySection({ setOption }) {
  const { allItems, setCategory } = useContext(DataContext);
  return (
    <div
      className="absolute top-39 left-28 border  bg-black border-zinc-800 rounded-4xl grid grid-cols-4 p-9 gap-4 justify-center items-center "
      onMouseEnter={() => setOption("Category")}
      onMouseLeave={() => setOption(null)}
    >
      {[...new Set(allItems.map((item) => item.category))].map((item) => (
        <h1
          className=" border p-1 rounded-xl text-center border-zinc-800 hover:bg-zinc-900"
          onClick={() => {
            setCategory(
              allItems.filter((product) => product.category === item)
            );
            setOption(false);
          }}
        >
          {item
            .split("-")
            .map((word) => word[0].toUpperCase() + word.slice(1))
            .join(" ")}
        </h1>
      ))}
    </div>
  );
}
export default CategorySection;
