import React, { useState } from "react";

interface ErrorProps {
  label: string;
  showError: boolean;
}

const MyError: React.FC<ErrorProps> = ({ label }) => {
  const [showError, setShowError] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setShowError(event.target.value.trim() === "");
  };

  const handleClick = () => {
    setShowError(false);
  };

  return (
    <div>
      <ul>
        <li>
          <label className={`hs-error-msg ${showError ? "visible" : "hidden"}`}>
            {`Please complete this required field.`}
          </label>
        </li>
      </ul>
      <input
        type="text"
        placeholder={label}
        className="input_box"
        onBlur={handleBlur}
        onClick={handleClick}
      />
    </div>
  );
};

export default MyError;
