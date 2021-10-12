import React, { useState } from "react";
import SideInfo from "./SideInfo";
function Form({createList}) {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    phoneNumber: 0,
    power: "",
    emailAddress: "",
  });
  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };
  const handleSbmit=(e)=>{
      e.preventDefault();
      createList(student)
      console.log(student)
  }
  return (
    <div className="form-page">
      {     
        <form onSubmit={handleSbmit}>
            
          <input
          required 
            name="name" 
            placeholder="name"
            onChange={handleChange}
            />
          <input
            name="lastName"
            placeholder="lastName"
            onChange={handleChange}
          />
          <input
            name="phoneNumber"
            placeholder="phoneNumber"
            onChange={handleChange}
          />
          <input name="power" placeholder="power" onChange={handleChange} />
          <input
            name="emailAddress"
            placeholder="emailAddress"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      }

      <SideInfo />
    </div>
  );
}

export default Form;
