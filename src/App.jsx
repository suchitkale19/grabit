// import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import Login from "./pages/Login";
import Navpanel from "/src/component/home/Navpanel.jsx";
import Footer from "/src/component/home/Footer.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataProvider } from "./DataContext";
import Details from "./pages/Details";
import ErrorPage from "./pages/ErrorPage";
import SignInPage from "./pages/SignInPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import UserInfo from "./pages/UserInfo";
import ScrollToTop from "./ScrollToTop";
import { UserProvider } from "./UserContext";
import { CartProvider } from "./CartContext";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <DataProvider>
        <UserProvider>
          <CartProvider>
            <Navpanel />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="explore" element={<Explore />} />
              <Route path="login" element={<Login />} />
              <Route path="search" element={<Search />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:idNum" element={<Details />} />
              <Route path="/sign-in" element={<SignInPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/user" element={<UserInfo />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </CartProvider>
        </UserProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
