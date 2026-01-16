import { useState } from "react";
import ButtonSvg from "../home/ButtonSvg";
import CategorySection from "../home/CategorySection";
import Rating from "./Rating";
import Price from "./Price";
import Discount from "./Discount";

function FilterByOptions({ setCategory }) {
  const [option, setOption] = useState(false);
  return (
    <div className="w-full h-auto flex gap-5 items-center p-9">
      <h1 className="text-xl">Filter By :</h1>
      {[
        {
          name: "Category",
          path: "m260-520 220-360 220 360H260ZM700-80q-75 0-127.5-52.5T520-260q0-75 52.5-127.5T700-440q75 0 127.5 52.5T880-260q0 75-52.5 127.5T700-80Zm-580-20v-320h320v320H120Zm580-60q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Zm-500-20h160v-160H200v160Zm202-420h156l-78-126-78 126Zm78 0ZM360-340Zm340 80Z",
          width: "50",
        },
        {
          name: "Rating",
          path: "m668-380 152-130 120 10-176 153 52 227-102-62-46-198Zm-94-292-42-98 46-110 92 217-96-9ZM294-287l126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM173-120l65-281L20-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-340Z",
        },
        {
          name: "Price",
          path: "M549-120 280-400v-80h140q53 0 91.5-34.5T558-600H240v-80h306q-17-35-50.5-57.5T420-760H240v-80h480v80H590q14 17 25 37t17 43h88v80h-81q-8 85-70 142.5T420-400h-29l269 280H549Z",
        },
        {
          name: "Discount",
          path: "M480-80q-24 0-46-9t-39-26q-29-29-50-38t-63-9q-50 0-85-35t-35-85q0-42-9-63t-38-50q-17-17-26-39t-9-46q0-24 9-46t26-39q29-29 38-50t9-63q0-50 35-85t85-35q42 0 63-9t50-38q17-17 39-26t46-9q24 0 46 9t39 26q29 29 50 38t63 9q50 0 85 35t35 85q0 42 9 63t38 50q17 17 26 39t9 46q0 24-9 46t-26 39q-29 29-38 50t-9 63q0 50-35 85t-85 35q-42 0-63 9t-50 38q-17 17-39 26t-46 9Zm0-80q8 0 15.5-3.5T508-172q41-41 77-55.5t93-14.5q17 0 28.5-11.5T718-282q0-58 14.5-93.5T788-452q12-12 12-28t-12-28q-41-41-55.5-77T718-678q0-17-11.5-28.5T678-718q-58 0-93.5-14.5T508-788q-5-5-12.5-8.5T480-800q-8 0-15.5 3.5T452-788q-41 41-77 55.5T282-718q-17 0-28.5 11.5T242-678q0 58-14.5 93.5T172-508q-12 12-12 28t12 28q41 41 55.5 77t14.5 93q0 17 11.5 28.5T282-242q58 0 93.5 14.5T452-172q5 5 12.5 8.5T480-160Zm100-160q25 0 42.5-17.5T640-380q0-25-17.5-42.5T580-440q-25 0-42.5 17.5T520-380q0 25 17.5 42.5T580-320Zm-202-2 260-260-56-56-260 260 56 56Zm2-198q25 0 42.5-17.5T440-580q0-25-17.5-42.5T380-640q-25 0-42.5 17.5T320-580q0 25 17.5 42.5T380-520Zm100 40Z",
          width: "50",
        },
      ].map((button) => (
        <>
          <div
            className="relative "
            key={button.name}
            onMouseEnter={() => setOption(true)}
            onMouseLeave={() => setOption(false)}
          >
            <ButtonSvg
              path={button.path}
              name={button.name}
              width={button.width}
            />
          </div>
          {option && (
            <CategorySection setOption={setOption} setCategory={setCategory} />
          )}
          {/* {option &&
            (button.name === "Category" ? (
              <CategorySection
                setOption={setOption}
                setCategory={setCategory}
              />
            ) : button.name === "Rating" ? (
              <Rating />
            ) : button.name === "Price" ? (
              <Price />
            ) : button.name === "Discount" ? (
              <Discount />
            ) : (
              ""
            ))} */}
          {/* <Rating /> */}
          {/* <Price /> */}
          {/* <Discount /> */}
        </>
      ))}
    </div>
  );
}

export default FilterByOptions;
