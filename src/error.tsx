import React, { useState } from "react";

const YourComponent: React.FC = () => {
  const [showError, setShowError] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    // Check if the input is empty
    if (event.target.value.trim() === "") {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };

  const handleClick = () => {
    setShowError(false); // Hide the error message when input is clicked again
  };

  return (
    <div>
      <ul className="no-list hs-error-msgs inputs-list" role="alert">
        <li>
          <label
            className={`hs-error-msg hs-main-font-element ${
              showError ? "visible" : "hidden"
            }`}
          >
            Please complete this required field.
          </label>
        </li>
      </ul>
      <input
        type="text"
        placeholder="First Name"
        className="input_box"
        onBlur={handleBlur}
        onClick={handleClick}
      />
    </div>
  );
};

export default YourComponent;
