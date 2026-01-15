import { Outlet } from "react-router-dom";
import AllProducts from "../component/explore/AllProducts";
import FilterByOptions from "../component/explore/FilterByOptions";
import { useState } from "react";

function Explore() {
  const [category, setCategory] = useState([]);

  return (
    <>
      <div className="bg-black text-white min-h-screen h-full w-full  ubuntu-light">
        <FilterByOptions setCategory={setCategory} />
        <AllProducts category={category} />
      </div>
      <Outlet />
    </>
  );
}

export default Explore;
