import { useContext } from "react";
import { DataContext } from "../../DataContext";

function InputLabel({ name, type }) {
  const { user, setUser } = useContext(DataContext);
  function handleChange(e) {
    setUser({ ...user, [e.target.name.split(" ").join("")]: e.target.value });
  }
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input
        id={name}
        className=" h-10 w-96 p-4 border border-zinc-700 rounded"
        name={name}
        type={type ? type : "text"}
        placeholder={`Enter your ${name}`}
        onChange={(e) => handleChange(e)}
        required
      />
    </>
  );
}

export default InputLabel;
