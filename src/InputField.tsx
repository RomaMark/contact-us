import CheckBox from "./CheckBox";
import CountrySelector from "./CountrySelector";

const inputField = () => {
  return (
    <div className="bg-white tall:py-6 tall-md:py-8 py-8 px-8 rounded-[40px]">
      <h1 className="mb-4">Contact us</h1>
      <div className="max-h-screen flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <input
            type="text"
            placeholder="First Name"
            className="input_box"
          ></input>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <input
            type="text"
            placeholder="Last Name"
            className="input_box"
          ></input>
        </div>
      </div>
      <div className="max-h-screen flex flex-wrap -mx-2 mb-4">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <input type="text" placeholder="Email" className="input_box"></input>
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
          <input
            type="text"
            placeholder="Company name"
            className="input_box"
          ></input>
        </div>
      </div>
      <div className="hs-input hs-fieldtype-textarea">
        <textarea
          placeholder="What would you like to talk about?"
          className="input_box"
        ></textarea>
      </div>
      <CheckBox />
      <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
        <button type="submit" className="input_submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default inputField;
