import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";

function ChangePassword({ setChange }) {
  const { loginUser, usersList, saveList } = useContext(UserContext);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [wrongPassword, setWrongPassword] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (loginUser.Password != oldPassword) {
      setWrongPassword(true);
      return;
    }

    const updatedUsers = usersList.map((user) =>
      user.email === loginUser.email
        ? { ...user, Password: newPassword }
        : user,
    );
    console.log(updatedUsers);
    console.log("working");
    saveList(updatedUsers);
    setWrongPassword(false);
    setChange(false);
  }
  return (
    <div className="h-screen w-full backdrop-blur-lg text-white flex flex-col gap-9 justify-center items-center absolute">
      <div className="border bg-black border-zinc-900 h-fit w-fit text-lg flex flex-col rounded-2xl  p-7 gap-4 items-center">
        <form
          className="flex flex-col items-start gap-2"
          onSubmit={handleSubmit}
        >
          <div className="h-fit w-full flex items-center justify-end">
            <div
              className="h-8 w-8 text-2xl pb-1 bg-zinc-900 font-bold flex justify-center items-center border border-zinc-800 rounded-full"
              onClick={() => setChange(false)}
            >
              &times;
            </div>
          </div>
          {wrongPassword && <p>You have enter'ed wrong password</p>}
          <label htmlFor="oldPassword">Old Password</label>
          <input
            id="oldPassword"
            className=" h-10 w-96 p-4 border border-zinc-700 rounded"
            name="oldPassword"
            type="password"
            onChange={(e) => setOldPassword(e.target.value)}
            placeholder="Enter your Old Password"
            required
          />
          <label htmlFor="NewPassword">New Password</label>
          <input
            id="NewPassword"
            className=" h-10 w-96 p-4 border border-zinc-700 rounded"
            name="NewPassword"
            type="password"
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="Enter your New Password"
            required
          />
          <button className="w-full h-10  bg-zinc-600 rounded-2xl hover:bg-zinc-800 cursor-pointer transition-all">
            Change
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
