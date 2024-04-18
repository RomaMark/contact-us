import InputFields from "./InputFields";
import "./static/styles.css";

export default function App() {
  return (
    <div className="flex flex-wrap justify-center grid-cols-1 mt-[4%] lg:[grid-template-columns:35%_65%] sm:px-10 md:px-16 lg:px-10 xl:px-20">
      <div className="sm:text-left md:space-y-7 lg:pb-0">
        <div>
          <p className="mb-2 text-xl md:text-4xl">Media enquiries:</p>
          <a href="/" className="unlink no-underline inline-block relative">
            press@tuum.com
          </a>
        </div>
        <div>
          <p className="mb-2 text-xl md:text-4xl">Career questions:</p>
          <a href="/" className="unlink no-underline inline-block relative">
            careers@tuum.com
          </a>
        </div>
      </div>
      <InputFields />
    </div>
  );
}
