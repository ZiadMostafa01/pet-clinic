import img from "../../assets/images/why-choose-us.jpg";
import bg from "../../assets/images/bg_img.png";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          style={{
            background: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "top right",
            backgroundColor: "#F5F2F8",
            width: "100%",
          }}
          className="bg-[#F6F1FA] rounded-[32px] p-12"
        >
          <div className="flex flex-col lg:flex-row justify-between gap-16 items-start">
            {/* LEFT SIDE */}
            <div className="mx-auto lg:mx-0 text-center lg:text-start">
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
                Why Choose Us
              </span>

              <h2 className="text-4xl leading-tight font-extrabold text-[#3f2a63] mb-6">
                Uniting Innovation and <br />
                Empathy in Every Paw
              </h2>

              <p className="text-gray-600 max-w-md text-sm mb-10">
                Vel vivamus rutrum commodo mus id odio. Volutpat viverra pretium
                orci dictum cras congue porta lorem facilisi.
              </p>

              <div className="rounded-xl max-w-2xl overflow-hidden ">
                <img
                  src={img}
                  alt="why choose us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT SIDE – 2x2 GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Card 1 – Orange */}
              <div className="bg-[#F6844D] text-white rounded-2xl p-8">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#F6844D] mb-6">
                  ❤️
                </div>

                <h3 className="text-xl font-bold mb-3">Compassion first</h3>

                <p className="text-sm leading-relaxed text-white/90">
                  Efficitur eleifend aenean taciti mattis ad elit elementum
                </p>
              </div>

              {/* Card 2 */}
              <div className="border-2 border-dashed border-[#7b5ca8] rounded-2xl p-8 bg-transparent">
                <div className="w-14 h-14 bg-[#F6844D] rounded-xl flex items-center justify-center text-white mb-6">
                  🐶
                </div>

                <h3 className="text-lg font-bold text-[#3f2a63] mb-3">
                  Holistic Wellness
                </h3>

                <p className="text-sm text-gray-600">
                  Efficitur eleifend aenean taciti mattis ad elit elementum
                </p>
              </div>

              {/* Card 3 */}
              <div className="border-2 border-dashed border-[#7b5ca8] rounded-2xl p-8 bg-transparent">
                <div className="w-14 h-14 bg-[#F6844D] rounded-xl flex items-center justify-center text-white mb-6">
                  🏥
                </div>

                <h3 className="text-lg font-bold text-[#3f2a63] mb-3">
                  Modern Facilities
                </h3>

                <p className="text-sm text-gray-600">
                  Efficitur eleifend aenean taciti mattis ad elit elementum
                </p>
              </div>

              {/* Card 4 */}
              <div className="border-2 border-dashed border-[#7b5ca8] rounded-2xl p-8 bg-transparent">
                <div className="w-14 h-14 bg-[#F6844D] rounded-xl flex items-center justify-center text-white mb-6">
                  🍃
                </div>

                <h3 className="text-lg font-bold text-[#3f2a63] mb-3">
                  Sustainable Practice
                </h3>

                <p className="text-sm text-gray-600">
                  Efficitur eleifend aenean taciti mattis ad elit elementum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
