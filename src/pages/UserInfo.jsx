import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import ButtonSvg from "/src/component/home/ButtonSvg.jsx";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../component/login/ChangePassword";

function UserInfo() {
  const navigate = useNavigate();
  const { loginUser, usersList, setLoginUser, saveList, setLogin, login } =
    useContext(UserContext);
  const [change, setChange] = useState(false);
  return (
    <div className="min-h-screen h-fit w-full bg-black text-white flex justify-center items-center relative">
      {change && <ChangePassword setChange={setChange} />}
      {login ? (
        <div className="h-fit flex gap-10  w-[80%] p-6">
          {/* <h1 className="">Personal Info</h1> */}
          <div className="w-[30%] h-fit flex flex-col gap-6 py-6  ">
            <div className=" flex flex-col justify-center items-center gap-1 p-4 border border-zinc-800 rounded-2xl">
              <img
                className="h-32 w-32 object-cover object-top rounded-full "
                src={`src/assets/${loginUser.PinCode}.jpg`}
                alt={loginUser.Fullname}
              />
              <h1 className="text-xl">{loginUser.Fullname}</h1>
              <h1 className="text-lg text-zinc-400">{loginUser.Email}</h1>
              <ButtonSvg name={"Edit Profile"} />
            </div>
            <div className=" flex flex-col p-4 gap-2 border rounded-2xl border-zinc-800">
              {[
                { label: "My Orders" },
                { label: "Addresses" },
                { label: "Account Settings" },
                {
                  label: "Log Out",
                  function: () => {
                    setLogin(false);
                    navigate("/");
                  },
                },
              ].map((buttonName) => (
                <a
                  href={`#${buttonName.label.split(" ").join("")}`}
                  key={buttonName.label}
                  className="h-10 border w-full text-start px-6 rounded-xl no-underline pt-1 hover:bg-gray-900"
                  onClick={buttonName.function}
                >
                  {buttonName.label}
                </a>
              ))}
            </div>
          </div>
          <div className="w-[70%] h-fit flex flex-col rounded-2xl gap-2 text-3xl p-6">
            <h1 className="text-4xl" id="MyOrders">
              My Orders
            </h1>
            <div className="min-h-[40%] h-48  w-full flex items-center justify-center rounded-2xl border border-zinc-800">
              <h1>No orders yet!</h1>
            </div>
            <h1 className="text-4xl" id="Addresses">
              Addresses
            </h1>
            <div className="min-h-[40%] h-fit  w-full flex flex-col text-xl p-3 rounded-2xl border border-zinc-800">
              <h1>{loginUser.BuildingAddress},</h1>
              <h1>{loginUser.Landmark},</h1>
              <h1>{loginUser.Area},</h1>
              <h1>{loginUser.City},</h1>
              <h1>
                {loginUser.State} - {loginUser.PinCode}
              </h1>
            </div>
            <h1 className="text-4xl" id="AccountSettings">
              Account Settings
            </h1>
            <div className="flex flex-col gap-2 text-xl border p-6 rounded-2xl border-zinc-800">
              <button
                className="h-10 border w-full text-start px-6 rounded-xl hover:bg-gray-900"
                onClick={() => setChange(true)}
              >
                Change Password
              </button>
              <button
                className="h-10 border w-full text-start px-6 rounded-xl hover:bg-gray-900"
                onClick={() => {
                  (saveList(
                    usersList.filter(
                      (user) => loginUser.Fullname !== user.Fullname,
                    ),
                  ),
                    navigate("/"),
                    setLogin(false),
                    setLoginUser(""),
                    navigate("/"));
                }}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="text-3xl">You haven't logged in yet!</h1>
      )}
    </div>
  );
}

export default UserInfo;
