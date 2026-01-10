import { useContext } from "react";
import OfferCard from "./OfferCard";
import Title from "./Title";
import { DataContext } from "../../DataContext";

function OfferSection() {
  const { allItems } = useContext(DataContext);
  return (
    <div>
      <Title
        name={"Deals & Offers"}
        subtitle={"Unbeatable Prices for a Limited Time"}
      />
      <div className="w-full h-auto flex justify-center items-center ">
        <div className="w-[80%] grid grid-cols-2 gap-6 py-7">
          {allItems
            .filter((item) => item.discountPercentage > 19)
            .slice(0, 6)
            .map((item) => (
              <OfferCard item={item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default OfferSection;
