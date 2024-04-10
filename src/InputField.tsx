import "./styles.css";

const inputField = () => {
  return (
    <div className="bg-white tall:py-6 tall-md:py-8 py-8 px-8 lg:px-10 xl:px-16 rounded-[40px]">
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
          <input
            type="text"
            placeholder="Country"
            className="input_box"
          ></input>
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
      <div className="checkbox">
        <p>
          By submitting this form I accept <a href="/">privacy policy</a> and{" "}
          <a href="/">cookie policy</a>. *
        </p>
        <p>I would like to receive your newsletter.</p>
      </div>
      <button type="submit" className="input_submit">
        Submit
      </button>
    </div>
  );
};

export default inputField;