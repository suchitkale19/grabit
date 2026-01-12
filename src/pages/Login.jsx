import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../DataContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const {
    setLoginPage,
    loginData,
    setLoginUser,
    setLogin,
    setLoginData,
    usersList,
  } = useContext(DataContext);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let matchUser = usersList.filter(
      (user) =>
        user.Fullname === loginData.username &&
        user.Password === loginData.password
    );
    setLoginUser(matchUser);

    if (matchUser.length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
      setLogin(true);
      navigate("/");
      setLoginPage(true);
    }
    console.log(matchUser);
  }

  return (
    <div className="h-screen w-full bg-[url(/src/assets/bg3.svg)] bg-cover text-white flex flex-col gap-9 justify-center items-center">
      <Link to="/">
        <h1 onClick={() => setLoginPage(true)} className="text-3xl">
          🧾 Sprout Shell🛒
        </h1>
      </Link>
      <div className="border border-zinc-900 h-fit w-fit text-lg flex flex-col rounded-2xl  p-7 gap-4 items-center">
        <form
          className="flex flex-col items-start gap-2"
          onSubmit={handleSubmit}
        >
          {submitted && (
            <div className="text-red-600 flex flex-col justify-center items-center">
              <p>Something went wrong!</p>
              <p>You have entere'd wrong username or password</p>
            </div>
          )}
          <label htmlFor="username">Username</label>
          <input
            id="username"
            className=" h-10 w-96 p-4 border border-zinc-700 rounded"
            name="username"
            value={loginData.username}
            onChange={(e) =>
              setLoginData({ ...loginData, username: e.target.value })
            }
            placeholder="Enter your username"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className=" h-10 w-96 p-4 border border-zinc-700 rounded"
            name="password"
            type="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            placeholder="Enter your password"
            required
          />

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
