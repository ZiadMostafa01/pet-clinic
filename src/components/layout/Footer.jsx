import logo from "../../assets/images/Logo_main_light.png";

function Footer() {
  return (
    <footer className="bg-[#2a2140] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between gap-10">
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>✔ Book an Appointment</li>
            <li>✔ Contact Us</li>
            <li>✔ Customer Support</li>
            <li>✔ FAQs</li>
            <li>✔ Pet Emergency Help</li>
          </ul>
        </div>
        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li>✔ Book an Appointment</li>
            <li>✔ Contact Us</li>
            <li>✔ Customer Support</li>
            <li>✔ FAQs</li>
            <li>✔ Pet Emergency Help</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-sm">
            <li>✔ About Pawelle</li>
            <li>✔ Our Services</li>
            <li>✔ Pet Wellness Blog</li>
            <li>✔ Meet Our Vets</li>
          </ul>
        </div>

        {/* Our Clinic */}
        <div>
          <h3 className="font-semibold mb-4">Our Clinic</h3>
          <p className="text-sm mb-2">
            Jalan Cempaka Wangi No 22 <br /> Jakarta - Indonesia
          </p>
          <p className="text-sm mb-2">✉ support@yourdomain.tld</p>
          <p className="text-sm">📞 (888) 4000-2424</p>
        </div>
      </div>

      <hr className="border-gray-700 my-8" />

      {/* Bottom */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <img src={logo} className="w-52" alt="" />{" "}
        <p className="text-gray-400 text-center md:text-right">
          Copyright © 2026 Karas Veterinary Clinic, All rights reserved. 
        </p>
      </div>
    </footer>
  );
}
export default Footer;
