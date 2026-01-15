import { useContext, useState } from "react";
import Card from "../home/Card";
import Pagination from "./Pagination";
import { DataContext } from "../../DataContext";

function AllProducts({ category }) {
  const { allItems } = useContext(DataContext);
  const renderItems = category.length === 0 ? allItems : category;
  const [currentPage, setCurrentPage] = useState(1);
  const cardQuantity = 20;
  const totalPages = Math.ceil(renderItems.length / cardQuantity);
  const lastIndex = currentPage * cardQuantity;
  let startIndex = lastIndex - cardQuantity;
  return (
    <div>
      <div className="w-full flex justify-center items-center py-16 transition-all">
        <div className="w-[80%] grid grid-cols-4 justify-center items-center gap-6">
          {renderItems.slice(startIndex, lastIndex).map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
}

export default AllProducts;
