import React, { useState } from "react";

const MyError: React.FC = () => {
  const [showError, setShowError] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setShowError(event.target.value.trim() === "");
  };

  const handleClick = () => {
    // Hide the error message when input is clicked again
    setShowError(false);
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
        className="border-top-0"
        onBlur={handleBlur}
        onClick={handleClick}
      />
    </div>
  );
};

export default MyError;
