import axios from "axios";
import { useRef } from "react";

const Register = () => {
  const dataObj = useRef({});
  const handleChange = (eve) => {
    const { id, value } = eve.target;

    dataObj.current = {
      ...dataObj.current,
      [id]: value,
    };
  };
  const handleRegister = () => {
    const { name, loc, phone, email } = dataObj.current;
    axios
      .post("http://localhost:3000/users/reg", { name, loc, phone, email }, {})
      .then((res) => {
        console.log("Success", res);
      })
      .catch((res) => {
        console.log("Faillure", res);
      })
      
  };
  return (
    <div>
      <p>
        <b>Name:</b>
        <input id="name" onChange={handleChange} />
      </p>
      <p>
        <b>Location:</b>
        <input id="location" onChange={handleChange} />
      </p>
      <p>
        <b>Phone:</b>
        <input id="phone" onChange={handleChange} />
      </p>
      <p>
        <b>Email:</b>
        <input id="email" onChange={handleChange} />
      </p>
      <p>
        <button onClick={handleRegister}>Register</button>
      </p>
    </div>
  );
};

export default Register;
