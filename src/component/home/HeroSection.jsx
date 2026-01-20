import { Link } from "react-router-dom";
import ButtonSvg from "./ButtonSvg";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  const { setCategory, allItems } = useContext(DataContext);
  const path =
    "m120-420 320-460v460H120Zm153-80h87v-125l-87 125Zm227 80q12-28 26-98t14-142q0-72-13.5-148T500-920q61 18 121.5 67t109 117q48.5 68 79 149.5T840-420H500Zm104-80h148q-17-77-55.5-141T615-750q2 21 3.5 43.5T620-660q0 47-4.5 87T604-500ZM360-200q-36 0-67-17t-53-43q-14 15-30.5 28T173-211q-35-26-59.5-64.5T80-360h800q-9 46-33.5 84.5T787-211q-20-8-36.5-21T720-260q-23 26-53.5 43T600-200q-36 0-67-17t-53-43q-22 26-53 43t-67 17ZM80-40v-80h40q32 0 62.5-10t57.5-30q27 20 57.5 29.5T360-121q32 0 62-9.5t58-29.5q27 20 57.5 29.5T600-121q32 0 62-9.5t58-29.5q28 20 58 30t62 10h40v80h-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40H80Zm280-460Zm244 0Z";
  return (
    <div className="w-full flex justify-center items-center p-16 text-xl ">
      <div className="w-[80%] h-[70vh] grid grid-cols-4 grid-rows-2 gap-5  rounded-2xl">
        <div className="text-zinc-200 border transition-all  border-zinc-700 bg-[url(/src/assets/bg-2.jpg)] bg-cover bg-center flex flex-col justify-end px-6 py-12 col-span-2 row-span-2 gap-2 rounded-2xl">
          <h1 className="text-3xl text-white ">
            Everything You Need. One Click Away.
          </h1>
          <p>
            Discover Millions of Products, Best Deals, and Lightning-Fast
            Delivery.
          </p>
          <Link to="/explore">
            <ButtonSvg path={path} name={"Explore"} highlight={true} />
          </Link>
        </div>

        {[
          { bg: "bg-3.jpg", title: "Groceries", type: "groceries" },
          { bg: "bg-3.webp", title: "Smartphones", type: "smartphones" },
          {
            bg: "bg-4.webp",
            title: "Sports Accessories",
            type: "sports-accessories",
            grid: "col-span-2",
          },
        ].map((item) => (
          <div
            style={{ backgroundImage: `url(/src/assets/${item.bg})` }}
            className={`${
              item.grid ? item.grid : ""
            } border border-zinc-700 bg-cover bg-center rounded-2xl `}
            key={item.title}
          >
            <div
              className="h-full w-full bg-black/40  hover:bg-black/30 transition-all flex justify-end items-end p-4  font-bold rounded-2xl"
              onClick={() => {
                setCategory(
                  allItems.filter((product) => product.category === item.type),
                );
                navigate("/explore");
              }}
            >
              <h1>{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HeroSection;
