import React from "react";
import { CheckCircle } from "lucide-react";
import img from "../../assets/images/img_pet.png";

const plans = [
  {
    name: "Basic Care Plan",
    price: 199,
    highlighted: false,
  },
  {
    name: "Wellness Plus Plan",
    price: 299,
    highlighted: true,
  },
  {
    name: "Premium Care Plan",
    price: 499,
    highlighted: false,
  },
  {
    name: "Elite Wellness Plan",
    price: 999,
    highlighted: false,
  },
];

const features = [
  "Health Check",
  "Core Vaccines",
  "Nail Trimming",
  "Ear Cleaning",
  "Dental Check",
  "Nutrition Guide",
];

export default function PricingSection() {
  return (
    <section className="bg-[#f5f5f5] py-10 space-y-44">
      <div className="text-center">
          <span className="mb-6 inline-flex items-center gap-2 bg-[#F6844D] text-white px-3 py-2 rounded-full text-xs sm:text-sm">
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-fas-paw w-4"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
          >
            <path d="M256 224c-79.41 0-192 122.76-192 200.25 0 34.9 26.81 55.75 71.74 55.75 48.84 0 81.09-25.08 120.26-25.08 39.51 0 71.85 25.08 120.26 25.08 44.93 0 71.74-20.85 71.74-55.75C448 346.76 335.41 224 256 224zm-147.28-12.61c-10.4-34.65-42.44-57.09-71.56-50.13-29.12 6.96-44.29 40.69-33.89 75.34 10.4 34.65 42.44 57.09 71.56 50.13 29.12-6.96 44.29-40.69 33.89-75.34zm84.72-20.78c30.94-8.14 46.42-49.94 34.58-93.36s-46.52-72.01-77.46-63.87-46.42 49.94-34.58 93.36c11.84 43.42 46.53 72.02 77.46 63.87zm281.39-29.34c-29.12-6.96-61.15 15.48-71.56 50.13-10.4 34.65 4.77 68.38 33.89 75.34 29.12 6.96 61.15-15.48 71.56-50.13 10.4-34.65-4.77-68.38-33.89-75.34zm-156.27 29.34c30.94 8.14 65.62-20.45 77.46-63.87 11.84-43.42-3.64-85.21-34.58-93.36s-65.62 20.45-77.46 63.87c-11.84 43.42 3.64 85.22 34.58 93.36z"></path>
          </svg>
          Choose Package
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#4b2c73] leading-tight">
          Discover Affordable Pet <br /> Wellness Options
        </h2>
      </div>
      <div className="pt-24 px-4 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl">
          <img src={img} alt="pets" className="w-full object-contain" />
        </div>

        <div className="max-w-7xl mx-auto bg-[#e9e6ee] rounded-3xl p-6 md:p-12">
          {/* Plans Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="flex flex-col">
                {/* Top Title Box */}
                <div
                  className={`rounded-2xl p-6 text-center mb-6 ${
                    plan.highlighted
                      ? "bg-[#4b2c73] text-white"
                      : "bg-[#d9c8e8] text-[#4b2c73]"
                  }`}
                >
                  <h3 className="font-bold text-lg">{plan.name}</h3>
                  <p className="text-sm opacity-80 mt-2">
                    Nisi lacinia nullam consectetur non arcu platea sem
                  </p>
                </div>

                {/* Card Body */}
                <div className="bg-white rounded-2xl p-8 flex flex-col justify-between h-full">
                  {/* Price */}
                  <div className="mb-6 text-center">
                    <h2 className="text-5xl font-extrabold text-[#f47c48]">
                      <span className="text-2xl mr-1 align-top text-[#4b2c73]">
                        $
                      </span>
                      {plan.price}
                      <span className="text-base font-medium text-[#4b2c73]">
                        {" "}
                        /session
                      </span>
                    </h2>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-bold text-[#4b2c73] mb-4">Features:</h4>

                    <ul className="space-y-3">
                      {features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-gray-600 text-sm border-b border-dashed border-gray-200 pb-3"
                        >
                          <CheckCircle
                            size={16}
                            className="text-orange-500 shrink-0"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Button */}
                  <button className="cursor-pointer mt-auto bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-white text-sm py-2 rounded-full font-medium hover:bg-[#5e3c96] transition">
                    Choose Package
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Top Pets Image */}
    </section>
  );
}
