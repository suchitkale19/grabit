import { useContext } from "react";
import { DataContext } from "../DataContext";

function UserInfo() {
  const { loginUser } = useContext(DataContext);
  return (
    <div className="h-fit w-full bg-black text-white flex justify-center items-center">
      <img
        className="h-96 rounded-full "
        src={`src/assets/${loginUser[0].PinCode}.png`}
        alt={loginUser[0].Fullname}
      ></img>
      <h1 className="text-3xl">{loginUser[0].Fullname}</h1>
    </div>
  );
}

export default UserInfo;
