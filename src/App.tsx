import "./styles.css";
import InputField from "./InputField";

export default function App() {
  return (
    <div className="App">
      <div className="grid grid-cols-1 mt-[6%] tall:mt-[3%] tall-md:mt-[6%] tall:pb-[3%] pb-[6%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20">
        <aside>
          <div className="space-y-4 pb-7 text-center sm:text-left md:space-y-7 lg:pb-0">
            <div>
              <p className="text-xl md:font-reckless-neue md:text-4xl">
                Media enquiries:
              </p>
              <a href="/">press@tuum.com</a>
            </div>
            <div>
              <p className="text-xl md:font-reckless-neue md:text-4xl">
                Career questions:
              </p>
              <a href="/">careers@tuum.com</a>
            </div>
          </div>
        </aside>
        <InputField />
      </div>
    </div>
  );
}
