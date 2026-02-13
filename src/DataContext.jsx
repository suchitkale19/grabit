import { createContext, useEffect, useState } from "react";
import Loading from "./pages/Loading";

const DataContext = createContext();

function DataProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [error, setError] = useState();

  useEffect(function () {
    async function fetchItems() {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=194");
        if (!res.ok) throw new Error("Something went wrong");
        const data = await res.json();
        setAllItems(data.products || []);
        console.log(data);
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (loading || error) {
    return <Loading message={error || "Loading..."} />;
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
