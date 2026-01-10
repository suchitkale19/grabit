import { useContext } from "react";
import ButtonSvg from "./ButtonSvg";
import { Link } from "react-router-dom";
import { DataContext } from "/src/DataContext.jsx";
function Navpanel() {
  const { query, setQuery, loginPage, setLoginPage } = useContext(DataContext);
  return (
    loginPage && (
      <div className="h-20 w-full text-white flex justify-between items-center px-11 bg-zinc-950 border-b border-zinc-700 ">
        <Link to="/">
          <h1 className="text-3xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
            Grab It🛒
          </h1>
        </Link>
        <div className="h-auto  rounded-2xl flex items-center gap-3 relative">
          <input
            className="h-11 w-150 rounded-2xl px-5 bg-zinc-900 outline-0 "
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by product name"
          />

          <Link to="/search">
            <svg
              className="absolute translate-x-0 top-2 right-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              height="30px"
              viewBox="0 -960 960 960"
              width="30px"
              fill="#e8eaed"
            >
              <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
            </svg>
          </Link>
        </div>

        <div className="flex gap-6 text-lg ">
          <Link to="/login" onClick={() => setLoginPage(false)}>
            <ButtonSvg
              name={"Login"}
              path={
                "M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"
              }
            />
          </Link>

          <Link to="/cart">
            <ButtonSvg
              name={"Cart"}
              path={
                "M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
              }
              highlight={true}
            />
          </Link>
        </div>
      </div>
    )
  );
}

export default Navpanel;
