import { useContext } from "react";
import { DataContext } from "../DataContext";
import ButtonSvg from "/src/component/home/ButtonSvg.jsx";

function UserInfo() {
  const { loginUser } = useContext(DataContext);
  return (
    <div className="h-fit w-full bg-black text-white flex justify-center items-center">
      <div className="h-fit flex gap-10  w-[80%] border p-6">
        {/* <h1 className="">Personal Info</h1> */}
        <div className="w-[30%] h-fit flex flex-col gap-6 py-6 ">
          <div className=" flex flex-col justify-center items-center gap-1 p-4 border rounded-2xl">
            <img
              className="h-32 w-32 object-cover object-top rounded-full "
              src={`src/assets/${loginUser[0].PinCode}.jpg`}
              alt={loginUser[0].Fullname}
            />
            <h1 className="text-xl">{loginUser[0].Fullname}</h1>
            <h1 className="text-lg text-zinc-400">{loginUser[0].Email}</h1>
            <ButtonSvg name={"Edit Profile"} />
          </div>
          <div className=" flex flex-col p-4 gap-2 border rounded-2xl ">
            {["My Orders", "Addresses", "Account Settings", "Log Out"].map(
              (button) => (
                <button
                  key={button}
                  className="h-10 border w-full text-start px-6 rounded-xl hover:bg-zinc-800"
                >
                  {button}
                </button>
              )
            )}
          </div>
        </div>
        <div className="w-[70%] border flex flex-col rounded-2xl gap-2 text-3xl p-6">
          <h1 className="text-4xl">Orders</h1>
          <div className="min-h-[40%] h-fit  w-full flex items-center justify-center rounded-2xl border">
            <h1>No orders yet!</h1>
          </div>
          <h1 className="text-4xl">Addresses</h1>
          <div className="min-h-[40%] h-fit  w-full flex flex-col text-xl p-3 rounded-2xl border">
            <h1>{loginUser[0].BuildingAddress},</h1>
            <h1>{loginUser[0].Landmark},</h1>
            <h1>{loginUser[0].Area},</h1>
            <h1>{loginUser[0].City},</h1>
            <h1>
              {loginUser[0].State} - {loginUser[0].PinCode}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
