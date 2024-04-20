import React, { useState } from "react";

const MyError: React.FC = () => {
  const [showError, setShowError] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setShowError(event.target.value.trim() === "");
  };

  const handleClick = () => {
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
        className="input_box"
        onBlur={handleBlur}
        onClick={handleClick}
      />
    </div>
  );
};

export default MyError;
