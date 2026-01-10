import { Link } from "react-router-dom";
import InputLabel from "../component/login/InputLabel";
import { useContext } from "react";
import { DataContext } from "../DataContext";

function SignInPage() {
  const { setLoginPage, user, setUser, initialUser, usersList, saveList } =
    useContext(DataContext);
  function handleSubmit(e) {
    e.preventDefault();
    usersList.push(user);
    saveList();
    // localStorage.clear(); // to clear local storage
    setUser(initialUser);

    console.log(user);
  }

  return (
    <div className="h-screen w-full bg-[url(/src/assets/bg3.svg)] bg-cover text-white flex flex-col gap-9 justify-center items-center">
      <Link to="/">
        <h1 onClick={() => setLoginPage(true)} className="text-3xl">
          🧾 Sprout Shell🛒
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
