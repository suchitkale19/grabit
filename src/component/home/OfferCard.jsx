import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../DataContext";

function OfferCard({ item }) {
  const navigate = useNavigate();
  const { setCategory, allItems } = useContext(DataContext);
  return (
    <div className="w-full h-48 bg-[url(/src/assets/bg3.svg)] bg-cover bg-center border border-zinc-950 rounded-2xl flex justify-between p-6">
      <div className="flex flex-col justify-between">
        <h1
          className="border p-3 hover:bg-zinc-900 transition-all cursor-pointer font-bold rounded-xl border-zinc-900 bg-zinc-950 text-center"
          onClick={() => {
            setCategory(
              allItems.filter((product) => product.brand === item.brand),
            );
            navigate("/explore");
          }}
        >
          {item.brand}
        </h1>
        <div>
          <h1
            className="text-2xl font-extrabold cursor-pointer"
            onClick={() => {
              setCategory(
                allItems.filter(
                  (product) =>
                    product.discountPercentage >= item.discountPercentage,
                ),
              );
              navigate("/explore");
            }}
          >
            Min. {Math.round(item.discountPercentage * 2.8)}% Off
          </h1>
          <h1
            className="text-sm font-semibold text-zinc-500 cursor-pointer"
            onClick={() => {
              setCategory(
                allItems.filter(
                  (product) => product.category === item.category,
                ),
              );
              navigate("/explore");
            }}
          >
            {item.category
              .split("-")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
          </h1>
        </div>
      </div>
      <img
        src={item.thumbnail}
        alt={item.title}
        onClick={() => {
          setCategory(
            allItems.filter((product) => product.category === item.category),
          );
          navigate("/explore");
        }}
      />
    </div>
  );
}
//product.discountPercentage >= item.discountPercentage,
export default OfferCard;
