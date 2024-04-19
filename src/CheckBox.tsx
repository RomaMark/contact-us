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
    <div className="w-full md:mb-0 space-y-4">
      <div className="flex flex-col">
        <span className="custom-span">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="mr-2 mt-4"
          />{" "}
          By submitting this form I accept{" "}
          <a href="/" className="custom-a">
            privacy policy
          </a>{" "}
          and{" "}
          <a href="/" className="custom-a">
            cookie policy
          </a>
          . *
        </span>
      </div>
      <div className="flex flex-col">
        <span className="custom-span">
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
            className="mr-2"
          />{" "}
          I would like to receive your newsletter.
        </span>
      </div>
    </div>
  );
};

export default CheckBox;
