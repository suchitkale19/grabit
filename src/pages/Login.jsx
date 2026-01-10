import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext";
import InputLabel from "../component/login/InputLabel";

function Login() {
  const { setLoginPage } = useContext(DataContext);
  return (
    <div className="h-screen w-full bg-[url(/src/assets/bg3.svg)] bg-cover text-white flex flex-col gap-9 justify-center items-center">
      <Link to="/">
        <h1 onClick={() => setLoginPage(true)} className="text-3xl">
          🧾 Sprout Shell🛒
        </h1>
      </Link>
      <div className="border border-zinc-900 h-fit w-fit text-lg flex flex-col rounded-2xl  p-7 gap-4 items-center">
        <form className="flex flex-col items-start gap-2">
          <InputLabel name={"Username"} />
          <InputLabel name={"Password"} type={"password"} />
          <button className="w-full h-10  bg-zinc-600 rounded-2xl hover:bg-zinc-800 cursor-pointer transition-all">
            Login
          </button>
        </form>
        <h2>
          Doesn't have an Account ?{" "}
          <Link to="/sign-in">
            <span className="hover:underline cursor-pointer">Sign In</span>
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Login;
