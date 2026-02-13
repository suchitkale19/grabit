import { useContext } from "react";
import Navpanel from "../component/home/Navpanel";
import SearchCard from "../component/search/SearchCard";
import { DataContext } from "../DataContext";

function Search() {
  const { allItems, query } = useContext(DataContext);

  const filteredItems =
    query.length > 1
      ? allItems.filter((item) =>
          item.title.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  return (
    <div className="bg-black text-white min-h-screen h-full w-full ubuntu-light">
      <div className="h-auto w-full flex items-center justify-center">
        <div className="w-[80%] h-auto py-5 flex flex-col items-center justify-center gap-5">
          {query.length <= 1 ? (
            <p className="text-3xl mt-52">Search what you need?</p>
          ) : filteredItems.length === 0 ? (
            <p className="text-4xl mt-48 text-amber-50">❌ No product found</p>
          ) : (
            filteredItems.map((item) => (
              <SearchCard item={item} key={item.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
