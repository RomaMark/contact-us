import { useState } from "react";
import CheckBox from "./Components/CheckBox";
import CountrySelector from "./Components/CountrySelector";
import MyError from "./Components/Error";

const InputFields = () => {
  const [firstNameError] = useState(false);
  const [lastNameError] = useState(false);
  const [emailError] = useState(false);
  const [companyNameError] = useState(false);

  return (
    <div className="container-size bg-white rounded-[40px] py-8 px-16 ml-28">
      <div className="flex mb-10">
        <h1>Contact us</h1>
        <div className="flex justify-center items-center ml-auto pt-4">
          <button type="button">
            <svg
              className="h-10 w-10"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="max-h-screen flex flex-wrap -mx-2 mb-4">
        <div className="md:w-1/2 px-2 mb-4 md:mb-0">
          <MyError showError={firstNameError} label="First name" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <MyError showError={lastNameError} label="Last name" />
        </div>
      </div>
      <div className="max-h-screen flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <MyError showError={emailError} label="Email" />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <input
            type="text"
            placeholder="Job Title"
            className="input_box"
          ></input>
        </div>
      </div>
      <div className="max-h-screen flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <CountrySelector />
        </div>
        <div className="w-full md:w-1/2 px-2">
          <MyError showError={companyNameError} label="Company name" />
        </div>
      </div>
      <div>
        <textarea
          placeholder="What would you like to talk about?"
          className="resize-none input_box"
          rows={6}
        ></textarea>
      </div>
      <CheckBox />
      <div className="md:w-1/2 md:mb-0">
        <button type="submit" className="input_submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default InputFields;
