import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [login, setLogin] = useState(false);
  const [loginPage, setLoginPage] = useState(true);
  const [loginUser, setLoginUser] = useState();
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
  const [user, setUser] = useState(initialUser);
  const [usersList, setUsersList] = useState(
    JSON.parse(localStorage.getItem("usersList")) || [],
  );
  function saveList(updatedUsers) {
    setUsersList(updatedUsers);
    localStorage.setItem("usersList", JSON.stringify(updatedUsers));
  }

  return (
    <UserContext.Provider
      value={{
        login,
        setLogin,
        setLoginUser,
        loginUser,
        loginData,
        setLoginData,
        user,
        setUser,
        saveList,
        usersList,
        loginPage,
        setLoginPage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
