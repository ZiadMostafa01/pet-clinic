import { Link } from "react-router-dom";
import bg from "../../assets/images/bg_img.png";
import img from "../../assets/images/img_2.png";
function Landing() {
  return (
    <section
      className="bg-purple-700 relative rounded-b-[60px] pt-6 flex justify-center items-center"
      style={{
        background: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "top right",
        backgroundColor: "#F5F2F8",
        width: "100%",
      }}
    >
      <div className="flex flex-col md:flex-row w-full h-full items-center justify-between gap-5 md:gap-0 max-w-7xl px-6  pt-[79.05px]">
        <div className="relative  text-center md:text-start flex flex-col items-center md:items-start justify-center ">
          {/* Small label */}
          <span className="inline-flex items-center gap-2 bg-[#F6844D] text-white px-3 py-2 rounded-full text-xs sm:text-sm  mb-4">
            <svg
              aria-hidden="true"
              className="e-font-icon-svg e-fas-paw w-4"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
            </svg>
            WELCOME TO KARAS
          </span>

          {/* Main title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#4b2c77] mb-6">
            EXPERT CARE.
            <br />
            GENUINE LOVE.
          </h1>

          {/* Subtitle */}
          <p className="text-[#4b2c77] font-medium  md:text-2xl mb-8 max-w-xl">
            We blend medical excellence with compassion to nurture your pet’s
            wellbeing.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <Link to="contact" className="cursor-pointer bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] px-6 py-3 rounded-full transition">
              Contact Us
            </Link>
          </div>
        </div>{" "}
        <div className="flex-shrink-0 h-full">
          <img
            src={img}
            className="w-[250px]  md:w-[400px] lg:w-[450px] h-full object-contain"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default Landing;
