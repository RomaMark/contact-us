import React, { useState } from "react";

const CheckBox: React.FC = () => {
  const [isPrivacyChecked, setIsPrivacyChecked] = useState(false);
  const [isNewsLetterChecked, setIsNewsLetterChecked] = useState(false);

  const handlePolicyCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsPrivacyChecked(event.target.checked);
  };

  const handleNewsLetterCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsNewsLetterChecked(event.target.checked);
  };

  return (
    <div className="w-full md:mb-0 space-y-4">
      <div className="flex flex-col">
        <span className="custom-span">
          <input
            type="checkbox"
            checked={isPrivacyChecked}
            onChange={handlePolicyCheckboxChange}
            className="mr-2 mt-4"
          />
          {"By submitting this form I accept "}
          <a href="/" className="custom-a">
            privacy policy
          </a>
          {" and "}
          <a href="/" className="custom-a">
            cookie policy
          </a>
          {". *"}
        </span>
      </div>
      <div className="flex flex-col">
        <span className="custom-span">
          <input
            type="checkbox"
            checked={isNewsLetterChecked}
            onChange={handleNewsLetterCheckboxChange}
            className="mr-2"
          />
          {"I would like to receive your newsletter."}
        </span>
      </div>
    </div>
  );
};

export default CheckBox;
