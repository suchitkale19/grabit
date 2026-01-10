import { Outlet } from "react-router-dom";
import AllProducts from "../component/explore/AllProducts";
import FilterByOptions from "../component/explore/FilterByOptions";

function Explore() {
  return (
    <>
      <div className="bg-black text-white min-h-screen h-full w-full  ubuntu-light">
        <FilterByOptions />
        <AllProducts />
      </div>
      <Outlet />
    </>
  );
}

export default Explore;
