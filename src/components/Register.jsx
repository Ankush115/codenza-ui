import axios from "axios";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [dataObj, setDataObj] = useState({
    name: "",
    location: "",
    phone: "",
    email: "",
  });

  const handleChange = (eve) => {
    const { id, value } = eve.target;
    setDataObj({
      ...dataObj,
      [id]: value,
    });
  };

  const handleRegister = () => {
    const { name, location, phone, email } = dataObj;

    axios
      .post("http://localhost:3000/users/reg", { name, location, phone, email })
      .then((res) => {
        const { acknowledged, insertedId } = res.data;
        if (acknowledged && insertedId) {
          setDataObj({ name: "", location: "", phone: "", email: "" });
          alert("Saved");
        } else {
          alert("Not Saved");
        }
      })
      .catch(() => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="container-sm m-5 d-inline-block border border-1 border-dark bg-info">
      <div className="row justify-content-center">
        <div className="col-md-6">

          {/* Form Group: Name */}
          <div className="m-3 d-flex align-items-center">
            <label htmlFor="name" className="form-label"><b>Name:</b></label>
            <input id="name" className="form-control" value={dataObj.name} onChange={handleChange} />
          </div>

          {/* Form Group: Phone */}
          <div className="m-3 d-flex align-items-center">
            <label htmlFor="phone" className="form-label"><b>Phone:</b></label>
            <input id="phone" className="form-control" value={dataObj.phone} onChange={handleChange} />
          </div>

          {/* Form Group: Email */}
          <div className="m-3 d-flex align-items-center">
            <label htmlFor="email" className="form-label "><b>Email:</b></label>
            <input id="email" className="form-control" value={dataObj.email} onChange={handleChange} />
          </div>

          {/* Form Group: Location */}
          <div className="m-3 d-flex align-items-center">
            <label htmlFor="location" className="form-label"><b>Location:</b></label>
            <input id="location" className="form-control" value={dataObj.location} onChange={handleChange} />
          </div>

          {/* Register Button */}
          <div className="text-center">
            <button className="btn btn-primary m-3" onClick={handleRegister}>Register</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
