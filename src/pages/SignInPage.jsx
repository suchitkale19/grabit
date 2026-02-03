import { Link } from "react-router-dom";
import InputLabel from "../component/login/InputLabel";
import { useContext } from "react";
import { UserContext } from "../UserContext";
import { useNavigate } from "react-router-dom";

function SignInPage() {
  const navigate = useNavigate();
  const {
    setLoginPage,
    user,
    setUser,
    initialUser,
    setLogin,
    usersList,
    saveList,
    setLoginUser,
  } = useContext(UserContext);
  function handleSubmit(e) {
    e.preventDefault();
    const updatedUsers = [...usersList, user];

    saveList(updatedUsers);
    setLogin(true);
    setLoginUser(user);
    setUser(initialUser);
    setLoginPage(true);
    navigate("/");
  }

  return (
    <div className="h-screen w-full bg-[url(/src/assets/bg3.svg)] bg-cover text-white flex flex-col gap-9 justify-center items-center">
      <Link to="/">
        <h1
          className="text-3xl font-extrabold bg-linear-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent"
          onClick={() => setLoginPage(true)}
        >
          Grab It🛒
        </h1>
      </Link>
      <form
        className="w-[60%] h-auto flex flex-col gap-5 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full grid grid-cols-2 gap-2 ">
          <div className="flex flex-col gap-2">
            <InputLabel name={"Fullname"} />
            <InputLabel name={"Mobile Number"} />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel name={"Email"} />
            <InputLabel name={"Building Address"} />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel name={"Road Address"} />
            <InputLabel name={"Area"} />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel name={"City"} />
            <InputLabel name={"Landmark"} />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel name={"State"} />
            <InputLabel name={"Pin Code"} />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel name={"Password"} type={"password"} />
            <InputLabel name={"Confirm Password"} type={"password"} />
          </div>
        </div>
        <button className="w-96 h-10  bg-zinc-600 rounded hover:bg-zinc-800 cursor-pointer transition-all">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignInPage;
