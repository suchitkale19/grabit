import { useContext } from "react";
import Navpanel from "../component/home/Navpanel";
import SearchCard from "../component/search/SearchCard";
import { DataContext } from "../DataContext";

function Search() {
  const { allItems, query } = useContext(DataContext);
  return (
    <div className="bg-black text-white min-h-screen h-full w-full  ubuntu-light">
      <div className=" h-auto w-full  flex items-center justify-center ">
        <div className="w-[80%] h-auto py-5 flex flex-col items-center justify-center gap-5">
          {query.length > 1 ? (
            allItems
              .filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
              )
              .map((item) => <SearchCard item={item} key={item.id} />)
          ) : (
            <p>Search what you need?</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
