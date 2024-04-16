import React, { useState } from "react";

const CheckBox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleCheckboxChange1 = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsChecked1(event.target.checked);
  };

  return (
    <div className="w-full px-2 mb-4 md:mb-0 space-y-4">
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2"
          />{" "}
          By submitting this form I accept{" "}
          <a href="/" className="blue-text">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="/" className="blue-text">
            cookie policy
          </a>
          . *
        </label>
      </div>
      <div className="flex flex-col">
        <label>
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
            className="mr-2"
          />{" "}
          I would like to receive your newsletter.
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
