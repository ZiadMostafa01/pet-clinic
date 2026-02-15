import React, { useState } from "react";
import bg from "../../assets/images/paw_img_pink.png";

import {
  Stethoscope,
  Syringe,
  Cat,
  Scissors,
  Home,
  Activity,
  MessageCircleMore,
} from "lucide-react";

const services = [
  { title: "Wellness Check", icon: Stethoscope },
  { title: "Vaccination Program", icon: Syringe },
  { title: "Nutritional Guidance", icon: Cat },
  { title: "Grooming Session", icon: Scissors },
  { title: "Pet Boarding", icon: Home },
  { title: "Rehabilitation Therapy", icon: Activity },
  { title: "Rehabilitation Therapy", icon: Activity },
  { title: "Rehabilitation Therapy", icon: Activity },
  { title: "Rehabilitation Therapy", icon: Activity },
];

export default function WhatWeOffer() {
  const [visibleCount, setVisibleCount] = useState(3); // عرض أول 3 خدمات فقط

  return (
    <section className="py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-16">
          <div>
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
              What We Offer
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#4b2c73] leading-tight">
              Compassionate Care Designed for Your Pet’s Wellness
            </h2>
          </div>

          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Cursus volutpat posuere cras duis dictumst aliquam risus vehicula
              elementum habitasse velit. Accumsan aliquet vivamus maecenas lorem
              dui eleifend tortor ultricies nascetur.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="cursor-pointer bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] flex items-center gap-2 text-sm text-white px-6 py-2 rounded-full font-medium hover:bg-[#5e3c96] transition">
                <MessageCircleMore size={18} />
                <span>Free Consultations</span>
              </button>

              <button className="cursor-pointer hover:bg-[var(--secondary)] border-2 border-[#6f4aa8] hover:border-[var(--secondary)] text-[#6f4aa8] text-sm px-6 py-2 rounded-full font-medium  transition">
                Discover More →{" "}
              </button>
            </div>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, visibleCount).map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="relative rounded-3xl p-8 overflow-hidden group hover:-translate-y-2 transition duration-400"
                style={{
                  background: `url(${bg})`,
                  backgroundSize: "175px 175px",
                  backgroundPosition: "bottom right",
                  backgroundColor: "#e7d9f3",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                }}
              >
                {/* Icon */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-[#4b2c73]">
                    {service.title}
                  </h3>

                  <div className="w-15 h-15 bg-[#6f4aa8] text-white flex items-center justify-center rounded-full">
                    <Icon size={30} />
                  </div>
                </div>

                {/* Divider */}
                <div className="border-b-2 border-dashed border-[var(--primary)] mb-6"></div>

                {/* Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Etiam a nisi aliquam blandit arcu mus non lectus vehicula.
                  Himenaeos vitae platea arcu aliquet justo litora diam nam.
                </p>

                {/* Button */}
                <a
                  href="#"
                  className="bg-[var(--primary)] text-white hover:text-[var(--primary)] px-5 py-2 rounded-full text-sm font-medium hover:bg-[var(--secondary)] transition inline-block text-center"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        {visibleCount < services.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + 3, services.length))
              }
              className="cursor-pointer bg-[var(--primary)] hover:bg-[var(--secondary)] hover:text-[var(--primary)] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5e3c96] transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
