import { MapPin, Mail, Phone, Clock } from "lucide-react";
import hero from "../assets/images/img_8.jpg"; 
import PagesHeader from "../components/PagesHeader";

const items = [
  {
    title: "Our Clinic",
    icon: MapPin,
    bg: "bg-[#f6f3fa]",
    border: "border-dashed border-[#7b5ba7]",
    iconBg: "bg-[#7b5ba7]",
    text: "Jln Cempaka Wangi No 22\nJakarta - Indonesia.",
    titleColor: "text-[#4b2c73]",
  },
  {
    title: "Email Support",
    icon: Mail,
    bg: "bg-[#fff5ef]",
    border: "border-dashed border-[#f6844d]",
    iconBg: "bg-[#f6844d]",
    text: "support@yourdomain.tld\nhello@yourdomain.tld",
    titleColor: "text-[#f6844d]",
  },
  {
    title: "Let's Talk",
    icon: Phone,
    bg: "bg-[#f6f3fa]",
    border: "border-dashed border-[#7b5ba7]",
    iconBg: "bg-[#7b5ba7]",
    text: "Phone : +6221.2002.2012\nFax : +6221.2002.2013",
    titleColor: "text-[#4b2c73]",
  },
  {
    title: "Opening Hours",
    icon: Clock,
    bg: "bg-[#fff5ef]",
    border: "border-dashed border-[#f6844d]",
    iconBg: "bg-[#f6844d]",
    text: "Monday – Saturday\n9:00 AM – 6:00 PM",
    titleColor: "text-[#f6844d]",
  },
];
function Contact() {
  return (
    <div>
      <PagesHeader
        title="Contact"
        description={
          <>
            Contact Karas Today for Personalized <br />
            Pet Support
          </>
        }
      />
   
      <main>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className={`rounded-xl p-8 text-center border-2 ${item.border} ${item.bg}`}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-lg ${item.iconBg}`}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-extrabold mb-3 ${item.titleColor}`}
                  >
                    {item.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        {/* Background Image */}
        <div className="relative h-[520px] w-full overflow-hidden">
          <img
            src={hero}
            alt="vet"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#3d2b57]/60" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            {/* small badge */}
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
              Get In Touch
            </span>

            {/* heading */}
            <h2 className="text-white font-extrabold text-[36px] md:text-[56px] leading-tight max-w-4xl">
              Let’s Connect and Talk <br /> About Pet Wellness
            </h2>
          </div>
        </div>
        <div className="relative z-20 -mt-32 pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
              {/* Map */}
              <div className="w-full h-[450px] lg:h-auto">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.6420767904756!2d55.1533619!3d25.080117700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d92534676a3%3A0xf95cba14b85fdf6c!2sKaras%20Veterinary%20Clinic!5e0!3m2!1sar!2seg!4v1771219766134!5m2!1sar!2seg"
                  className="w-full h-full border-0"
                  loading="lazy"
                ></iframe>
              </div>

              {/* Form */}
              <div className="p-6 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3b2a6d] mb-8">
                  Contact Pawelle for Trusted Pet Care
                </h2>
                <div className="border-[0.2px] border-[#D6D6D6] border-dashed mb-4"></div>

                <form className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        placeholder="Company"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Phone
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Your Phone Number"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter Your Email Address"
                        className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Tell Your Subject"
                      className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#3b2a6d] mb-2">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Message"
                      className="w-full bg-gray-200 focus:bg-gray-100 transition duration-300 text-sm rounded-lg px-4 py-3 outline-none focus:ring focus:ring-purple-400 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full cursor-pointer bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] font-medium py-4 rounded-full transition flex items-center justify-center gap-2"
                  >
                    ✉ Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-12">
              <p className="text-[var(--primary)] font-bold text-2xl">
                Follow our Social Media
              </p>
              <div className="flex justify-center gap-2">
                <a
                  href=""
                  className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-4 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-facebook-f fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 320 512"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                  </svg>
                </a>
                <a
                  href=""
                  className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-4 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-facebook-f fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                  </svg>
                </a>
                <a
                  href=""
                  className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-4 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-facebook-f fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                  </svg>
                </a>
                <a
                  href=""
                  className="bg-[var(--primary)] hover:bg-[var(--secondary)] text-white hover:text-[var(--primary)] hover:-translate-y-2 transition duration-300 p-4 rounded-full"
                >
                  <svg
                    aria-hidden="true"
                    class="e-font-icon-svg e-fab-facebook-f fill-current w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
export default Contact;
