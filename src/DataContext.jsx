import { createContext, useEffect, useState } from "react";
import Loading from "./pages/Loading";

const DataContext = createContext();

function DataProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);

  useEffect(function () {
    async function fetchItems() {
      const res = await fetch("https://dummyjson.com/products?limit=194");
      const data = await res.json();
      setAllItems(data.products || []);
      setLoading(false);
      console.log(data);
    }
    fetchItems();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <DataContext.Provider
      value={{
        allItems,
        query,
        setQuery,
        loading,
        category,
        setCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
