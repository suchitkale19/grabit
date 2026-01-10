import ButtonSvg from "./ButtonSvg";
import Title from "./Title";

function CategorySection({ allItems }) {
  return (
    <div className="h-auto">
      <Title
        name={"Featured Categories"}
        subtitle={"Discover Products Across Every Category"}
      />
      <div className="grid grid-cols-4 px-40 py-9 gap-6 justify-center items-center ">
        {[...new Set(allItems.map((item) => item.category))].map((item) => (
          <ButtonSvg
            name={item
              .split("-")
              .map((word) => word[0].toUpperCase() + word.slice(1))
              .join(" ")}
            key={item}
            height={24}
            width={48}
            textHeight={"xl"}
          />
        ))}
      </div>
    </div>
  );
}
export default CategorySection;
