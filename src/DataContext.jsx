import { createContext, useEffect, useState } from "react";
import Loading from "./pages/Loading";

const DataContext = createContext();

function DataProvider({ children }) {
  const [allItems, setAllItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [loginPage, setLoginPage] = useState(true);
  const [buyProduct, setBuyProduct] = useState([]);
  const [directBuy, setDirectBuy] = useState(true);
  const [login, setLogin] = useState(false);
  const [loginUser, setLoginUser] = useState();
  const [category, setCategory] = useState([]);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const initialUser = {
    Fullname: "",
    MobileNumber: "",
    Email: "",
    BuildingAddress: "",
    RoadAddress: "",
    Area: "",
    City: "",
    Landmark: "",
    State: "",
    PinCode: "",
    Password: "",
    ConfirmPassword: "",
  };
  const [cartProduct, setCartProduct] = useState([]);
  const [user, setUser] = useState(initialUser);
  const usersList = JSON.parse(localStorage.getItem("usersList")) || [];
  function saveList() {
    localStorage.setItem("usersList", JSON.stringify(usersList));
  }

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
        loginPage,
        setLoginPage,
        user,
        setUser,
        usersList,
        saveList,
        initialUser,
        cartProduct,
        setCartProduct,
        buyProduct,
        setBuyProduct,
        directBuy,
        setDirectBuy,
        login,
        setLogin,
        loginData,
        setLoginData,
        loginUser,
        setLoginUser,
        category,
        setCategory,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export { DataContext, DataProvider };
