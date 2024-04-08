import React from "react";

const inputField = () => {
  return (
    <form className="input">
      <input type="text" placeholder="First Name" className="input_box"></input>
      <input type="text" placeholder="Last Name" className="input_box"></input>
      <input type="text" placeholder="Email" className="input_box"></input>
      <input type="text" placeholder="Job Title" className="input_box"></input>
      <input type="text" placeholder="Country" className="input_box"></input>
      <input
        type="text"
        placeholder="Company name"
        className="input_box"
      ></input>
    </form>
  );
};

export default inputField;
