import { useContext } from "react";
import { UserContext } from "../../UserContext";

function InputLabel({ name, type }) {
  const { user, setUser } = useContext(UserContext);
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

// Area
// :
// "Kisan Nagar"
// BuildingAddress
// :
// "Indira Nagar Chawl"
// City
// :
// "Thane"
// ConfirmPassword
// :
// "suchit"
// Email
// :
// "suchitkale19102004@gmail.com"
// Fullname
// :
// "Suchit Sopan Kale"
// Landmark
// :
// "Near Sunrise Buisness Apartments"
// MobileNumber
// :
// "9867662551"
// Password
// :
// "suchit"
// PinCode
// :
// "400604"
// RoadAddress
// :
// "Road no. 16"
// State
// :
// "Maharashtra"

// Area
// :
// "Jogeshwari"
// BuildingAddress
// :
// "toast nagar , flat no. son"
// City
// :
// "Andheri"
// ConfirmPassword
// :
// "12345"
// Email
// :
// "kunaltoast@gmail.com"
// Fullname
// :
// "Kunal Santosh Pandey"
// Landmark
// :
// "Near sons toast"
// MobileNumber
// :
// "8276135512"
// Password
// :
// "qwerty"
// PinCode
// :
// "400801"
// RoadAddress
// :
// "rasta road"
// State
// :
// "Maharashtra"

// Area
// :
// "Sector 16"
// BuildingAddress
// :
// "Shivshakti Apartments"
// City
// :
// "Airoli"
// ConfirmPassword
// :
// "qwerty"
// Email
// :
// "sumitkano@gmail.com"
// Fullname
// :
// "Sumit Ramashankar Kanojia"
// Landmark
// :
// "Near rmv school"
// MobileNumber
// :
// "9823567481"
// Password
// :
// "qwerty"
// PinCode
// :
// "400708"
// RoadAddress
// :
// "Mulund-Airoli road"
// State
// :
// "Maharashtra"

// Area
// :
// "Antop Hill"
// BuildingAddress
// :
// "C.G.S colony 207"
// City
// :
// "Mumbai"
// ConfirmPassword
// :
// "12345"
// Email
// :
// "harshsb.43@gmail.com"
// Fullname
// :
// "Harsh Shashikant Bhosale"
// Landmark
// :
// "Near Semen ground"
// MobileNumber
// :
// "07208204093"
// Password
// :
// "qwerty"
// PinCode
// :
// "400037"
// RoadAddress
// :
// "Kane Nagar Road"
// State
// :
// "Maharashtra"
